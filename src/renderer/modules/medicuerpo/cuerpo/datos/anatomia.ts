export type RengCapa = 'esqueleto' | 'musculos' | 'organos'
export type RengLado = 'derecho' | 'izquierdo' | null

export interface RengMapaBP3D {
  arbol: 'partof' | 'isa'
  conceptos: string[]
  incluir?: string
  excluir?: string
  lado?: 'right' | 'left'
}

export interface RengEstructura {
  id: string
  nombre: string
  capa: RengCapa
  lado: RengLado
  sistema: string
  ubicacion: string
  funcion: string
  bp3d: RengMapaBP3D
  nota?: string
  otros?: string[]
}

export const RENG_CAPAS: ReadonlyArray<{ id: RengCapa; nombre: string }> = [
  { id: 'esqueleto', nombre: 'Huesos' },
  { id: 'musculos', nombre: 'Músculos' },
  { id: 'organos', nombre: 'Órganos' }
]

const RENG_OJO = 'cornea|iris|lens|sclera|vitreous|lacrimal gland|chamber|suspensory|retina|choroid|ciliary'
const RENG_VASOS_INTERNOS = 'artery|arteries|vein|venous|tributary|biliary|duct|branch|nerve'

const RENG_FEMENINOS = new Set(['Costillas', 'Clavícula', 'Escápula', 'Tibia'])
function rengAdjetivoLado(rengNombre: string, rengLado: 'derecho' | 'izquierdo'): string {
  const rengPrimera = rengNombre.split(' ')[0]!
  const rengRaiz = rengLado === 'derecho' ? 'derech' : 'izquierd'
  if (!RENG_FEMENINOS.has(rengPrimera)) return `${rengRaiz}o`
  return rengPrimera.endsWith('s') ? `${rengRaiz}as` : `${rengRaiz}a`
}

function rengPar(
  rengBase: string,
  rengNombre: string,
  rengCapa: RengCapa,
  rengSistema: string,
  rengUbicacion: (rengLado: 'derecho' | 'izquierdo') => string,
  rengFuncion: string,
  rengBp3d: (rengLado: 'right' | 'left') => RengMapaBP3D,
  rengExtra: Partial<Pick<RengEstructura, 'nota' | 'otros'>> = {}
): RengEstructura[] {
  return (['derecho', 'izquierdo'] as const).map((rengLado) => ({
    id: `${rengBase}-${rengLado}`,
    nombre: `${rengNombre} ${rengAdjetivoLado(rengNombre, rengLado)}`,
    capa: rengCapa,
    lado: rengLado,
    sistema: rengSistema,
    ubicacion: rengUbicacion(rengLado),
    funcion: rengFuncion,
    bp3d: rengBp3d(rengLado === 'derecho' ? 'right' : 'left'),
    ...rengExtra
  }))
}

const rengLat = (rengLado: 'derecho' | 'izquierdo'): string => (rengLado === 'derecho' ? 'lado derecho del cuerpo' : 'lado izquierdo del cuerpo')
const rengPorConcepto = (rengDerecho: string, rengIzquierdo: string, rengArbol: 'partof' | 'isa' = 'partof') => (rengL: 'right' | 'left'): RengMapaBP3D => ({ arbol: rengArbol, conceptos: [rengL === 'right' ? rengDerecho : rengIzquierdo] })
const rengPorLado = (rengConceptos: string[], rengArbol: 'partof' | 'isa' = 'isa') => (rengL: 'right' | 'left'): RengMapaBP3D => ({ arbol: rengArbol, conceptos: rengConceptos, lado: rengL })

export const RENG_ESTRUCTURAS: RengEstructura[] = [
  { id: 'craneo', nombre: 'Cráneo', capa: 'esqueleto', lado: null, sistema: 'Esquelético', ubicacion: 'Cabeza, sobre la columna vertebral.', funcion: 'Protege el encéfalo y los órganos de los sentidos y sostiene la cara.', bp3d: { arbol: 'partof', conceptos: ['FMA46565'], excluir: RENG_OJO }, nota: 'Incluye la mandíbula; sin los globos oculares.' },
  { id: 'columna', nombre: 'Columna vertebral', capa: 'esqueleto', lado: null, sistema: 'Esquelético', ubicacion: 'Línea media de la espalda, del cuello a la pelvis.', funcion: 'Sostiene el tronco, permite flexionarlo y girarlo y protege la médula espinal.', bp3d: { arbol: 'partof', conceptos: ['FMA13478'] }, otros: ['vértebras', 'espina dorsal'] },
  ...rengPar('costillas', 'Costillas', 'esqueleto', 'Esquelético', (rengL) => `Tórax, ${rengLat(rengL)}; se unen a la columna por detrás.`, 'Forman la caja torácica, que protege el corazón y los pulmones y se mueve al respirar.', (rengL) => ({ arbol: 'partof', conceptos: ['FMA7480'], incluir: `^${rengL} .*(rib|costal cartilage)` }), { otros: ['caja torácica'] }),
  { id: 'esternon', nombre: 'Esternón', capa: 'esqueleto', lado: null, sistema: 'Esquelético', ubicacion: 'Centro de la parte anterior del tórax.', funcion: 'Cierra por delante la caja torácica y une las costillas superiores.', bp3d: { arbol: 'partof', conceptos: ['FMA7485'] } },
  ...rengPar('clavicula', 'Clavícula', 'esqueleto', 'Esquelético', (rengL) => `Base del cuello, ${rengLat(rengL)}, entre el esternón y la escápula.`, 'Une el brazo al tronco y mantiene el hombro separado del tórax.', rengPorConcepto('FMA13322', 'FMA13323')),
  ...rengPar('escapula', 'Escápula', 'esqueleto', 'Esquelético', (rengL) => `Parte superior de la espalda, ${rengLat(rengL)}.`, 'Forma el hombro y es punto de anclaje de muchos músculos del brazo.', rengPorConcepto('FMA13395', 'FMA13396'), { otros: ['omóplato'] }),
  ...rengPar('humero', 'Húmero', 'esqueleto', 'Esquelético', (rengL) => `Brazo, entre el hombro y el codo, ${rengLat(rengL)}.`, 'Hueso largo del brazo: transmite la fuerza de los músculos del hombro y del codo.', rengPorConcepto('FMA23130', 'FMA23131')),
  ...rengPar('radio', 'Radio', 'esqueleto', 'Esquelético', (rengL) => `Antebrazo, del lado del pulgar, ${rengLat(rengL)}.`, 'Gira alrededor del cúbito para que la mano pueda ponerse palma arriba o abajo.', rengPorConcepto('FMA23464', 'FMA23465')),
  ...rengPar('cubito', 'Cúbito', 'esqueleto', 'Esquelético', (rengL) => `Antebrazo, del lado del meñique, ${rengLat(rengL)}.`, 'Forma el codo con el húmero y da estabilidad al antebrazo.', rengPorConcepto('FMA23467', 'FMA23468'), { otros: ['ulna'] }),
  ...rengPar('coxal', 'Hueso coxal', 'esqueleto', 'Esquelético', (rengL) => `Cadera, ${rengLat(rengL)}; con el sacro forma la pelvis.`, 'Sostiene el peso del tronco, protege órganos de la pelvis y articula con el fémur.', rengPorConcepto('FMA16586', 'FMA16587'), { otros: ['pelvis', 'cadera', 'hueso de la cadera'] }),
  { id: 'sacro', nombre: 'Sacro', capa: 'esqueleto', lado: null, sistema: 'Esquelético', ubicacion: 'Parte posterior de la pelvis, al final de la columna.', funcion: 'Une la columna con los huesos coxales y cierra la pelvis por detrás.', bp3d: { arbol: 'partof', conceptos: ['FMA16202'] }, otros: ['pelvis'] },
  ...rengPar('femur', 'Fémur', 'esqueleto', 'Esquelético', (rengL) => `Muslo, entre la cadera y la rodilla, ${rengLat(rengL)}.`, 'El hueso más largo del cuerpo: soporta el peso al estar de pie y al caminar.', rengPorConcepto('FMA24474', 'FMA24475')),
  ...rengPar('tibia', 'Tibia', 'esqueleto', 'Esquelético', (rengL) => `Pierna, cara interna, entre la rodilla y el tobillo, ${rengLat(rengL)}.`, 'Transmite el peso del cuerpo desde la rodilla hasta el pie.', rengPorConcepto('FMA24477', 'FMA24478')),
  ...rengPar('perone', 'Peroné', 'esqueleto', 'Esquelético', (rengL) => `Pierna, cara externa, ${rengLat(rengL)}.`, 'Da estabilidad al tobillo y anclaje a músculos de la pierna.', rengPorConcepto('FMA24480', 'FMA24481'), { otros: ['fíbula'] }),

  ...rengPar('pectoral-mayor', 'Músculo pectoral mayor', 'musculos', 'Muscular', (rengL) => `Parte anterior del tórax, ${rengLat(rengL)}.`, 'Acerca el brazo al cuerpo y lo lleva hacia delante.', rengPorConcepto('FMA13373', 'FMA13374')),
  ...rengPar('oblicuo-externo', 'Músculo oblicuo externo', 'musculos', 'Muscular', (rengL) => `Pared lateral del abdomen, ${rengLat(rengL)}.`, 'Gira y flexiona el tronco y comprime el abdomen.', rengPorConcepto('FMA13336', 'FMA13337')),
  ...rengPar('serrato-anterior', 'Músculo serrato anterior', 'musculos', 'Muscular', (rengL) => `Costado del tórax, sobre las costillas, ${rengLat(rengL)}.`, 'Desplaza la escápula hacia delante y la mantiene pegada al tórax.', rengPorConcepto('FMA13398', 'FMA13399')),
  ...rengPar('trapecio', 'Músculo trapecio', 'musculos', 'Muscular', (rengL) => `Parte posterior del cuello y de la espalda alta, ${rengLat(rengL)}.`, 'Eleva, acerca y estabiliza la escápula y extiende el cuello.', rengPorLado(['FMA32555', 'FMA32556', 'FMA32557'])),
  ...rengPar('deltoides', 'Músculo deltoides', 'musculos', 'Muscular', (rengL) => `Hombro, ${rengLat(rengL)}.`, 'Separa el brazo del cuerpo y lo lleva hacia delante y hacia atrás.', rengPorLado(['FMA34676'])),
  ...rengPar('biceps-braquial', 'Músculo bíceps braquial', 'musculos', 'Muscular', (rengL) => `Cara anterior del brazo, ${rengLat(rengL)}.`, 'Flexiona el codo y gira el antebrazo con la palma hacia arriba.', rengPorLado(['FMA37682', 'FMA37683']), { otros: ['bíceps'] }),
  ...rengPar('triceps-braquial', 'Músculo tríceps braquial', 'musculos', 'Muscular', (rengL) => `Cara posterior del brazo, ${rengLat(rengL)}.`, 'Extiende el codo.', rengPorLado(['FMA37692', 'FMA37693', 'FMA37694']), { otros: ['tríceps'] }),
  ...rengPar('braquiorradial', 'Músculo braquiorradial', 'musculos', 'Muscular', (rengL) => `Antebrazo, del lado del pulgar, ${rengLat(rengL)}.`, 'Flexiona el codo, sobre todo con el antebrazo a medio girar.', rengPorConcepto('FMA38486', 'FMA38487', 'isa')),
  ...rengPar('esternocleidomastoideo', 'Músculo esternocleidomastoideo', 'musculos', 'Muscular', (rengL) => `Cuello, ${rengLat(rengL)}, del esternón y la clavícula al cráneo.`, 'Gira e inclina la cabeza.', rengPorConcepto('FMA13408', 'FMA13409', 'isa')),
  ...rengPar('gluteo-mayor', 'Músculo glúteo mayor', 'musculos', 'Muscular', (rengL) => `Nalga, ${rengLat(rengL)}.`, 'Extiende la cadera: al subir escaleras, levantarse o correr.', rengPorConcepto('FMA22328', 'FMA22329', 'isa')),
  ...rengPar('recto-femoral', 'Músculo recto femoral', 'musculos', 'Muscular', (rengL) => `Cara anterior del muslo, ${rengLat(rengL)}; parte del cuádriceps.`, 'Extiende la rodilla y flexiona la cadera.', rengPorConcepto('FMA38928', 'FMA38929', 'isa'), { otros: ['cuádriceps'] }),
  ...rengPar('vasto-lateral', 'Músculo vasto lateral', 'musculos', 'Muscular', (rengL) => `Cara externa del muslo, ${rengLat(rengL)}; parte del cuádriceps.`, 'Extiende la rodilla.', rengPorConcepto('FMA38930', 'FMA38931', 'isa'), { otros: ['cuádriceps'] }),
  ...rengPar('sartorio', 'Músculo sartorio', 'musculos', 'Muscular', (rengL) => `Cruza el muslo en diagonal, de la cadera a la rodilla, ${rengLat(rengL)}.`, 'Flexiona la cadera y la rodilla y gira el muslo hacia fuera.', rengPorConcepto('FMA22354', 'FMA22355', 'isa')),
  ...rengPar('biceps-femoral', 'Músculo bíceps femoral', 'musculos', 'Muscular', (rengL) => `Cara posterior del muslo, ${rengLat(rengL)}; parte de los isquiotibiales.`, 'Flexiona la rodilla y extiende la cadera.', rengPorLado(['FMA45887', 'FMA45890']), { otros: ['isquiotibiales'] }),
  ...rengPar('gastrocnemio', 'Músculo gastrocnemio', 'musculos', 'Muscular', (rengL) => `Pantorrilla, ${rengLat(rengL)}.`, 'Eleva el talón (ponerse de puntillas) y ayuda a flexionar la rodilla.', rengPorLado(['FMA45956', 'FMA45959']), { otros: ['gemelos', 'pantorrilla'] }),
  ...rengPar('soleo', 'Músculo sóleo', 'musculos', 'Muscular', (rengL) => `Pantorrilla, bajo el gastrocnemio, ${rengLat(rengL)}.`, 'Eleva el talón y mantiene el equilibrio de pie.', rengPorConcepto('FMA22558', 'FMA22559', 'isa')),
  ...rengPar('tibial-anterior', 'Músculo tibial anterior', 'musculos', 'Muscular', (rengL) => `Cara anterior de la pierna, ${rengLat(rengL)}.`, 'Levanta la punta del pie al caminar.', rengPorConcepto('FMA22544', 'FMA22545', 'isa')),

  { id: 'encefalo', nombre: 'Encéfalo', capa: 'organos', lado: null, sistema: 'Nervioso', ubicacion: 'Dentro del cráneo.', funcion: 'Recibe e interpreta la información de los sentidos, controla el movimiento y el resto del cuerpo y sostiene el pensamiento y la memoria.', bp3d: { arbol: 'partof', conceptos: ['FMA50801'], excluir: 'artery|vein|ventricle|aqueduct|choroid' }, otros: ['cerebro'] },
  { id: 'corazon', nombre: 'Corazón', capa: 'organos', lado: null, sistema: 'Circulatorio', ubicacion: 'Centro del tórax, entre los pulmones, con la punta hacia la izquierda.', funcion: 'Bombea la sangre: a los pulmones para oxigenarla y al resto del cuerpo para repartirla.', bp3d: { arbol: 'partof', conceptos: ['FMA7088'], excluir: 'valve|cusp|leaflet|papillary|chorda|trabecul' }, nota: 'En el modelo, los ventrículos se representan por sus cavidades; no se incluyen las válvulas.' },
  { id: 'aorta', nombre: 'Aorta', capa: 'organos', lado: null, sistema: 'Circulatorio', ubicacion: 'Sale del corazón, forma un arco y baja por delante de la columna hasta el abdomen.', funcion: 'Arteria principal: lleva la sangre del corazón al resto del cuerpo.', bp3d: { arbol: 'partof', conceptos: ['FMA3734'] } },
  ...rengPar('pulmon', 'Pulmón', 'organos', 'Respiratorio', (rengL) => `Tórax, ${rengLat(rengL)} del corazón.`, 'Intercambia gases: la sangre toma oxígeno del aire y le cede dióxido de carbono.', rengPorConcepto('FMA7309', 'FMA7310'), { nota: 'BodyParts3D 4.0 representa el pulmón con su árbol bronquial y sus vasos, sin la superficie del tejido pulmonar.' }),
  { id: 'esofago', nombre: 'Esófago', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Del cuello al abdomen, por detrás de la tráquea y del corazón.', funcion: 'Lleva lo que se traga, por ondas musculares, desde la faringe hasta el estómago.', bp3d: { arbol: 'partof', conceptos: ['FMA7131'] } },
  { id: 'estomago', nombre: 'Estómago', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Parte superior izquierda del abdomen, bajo el diafragma.', funcion: 'Almacena y mezcla el alimento con el jugo gástrico ácido y lo pasa poco a poco al intestino.', bp3d: { arbol: 'partof', conceptos: ['FMA7148'] } },
  { id: 'duodeno', nombre: 'Duodeno', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Primer tramo del intestino delgado, en forma de C alrededor de la cabeza del páncreas.', funcion: 'Recibe el contenido del estómago y las secreciones del hígado y del páncreas.', bp3d: { arbol: 'partof', conceptos: ['FMA7206'] } },
  { id: 'intestino-delgado', nombre: 'Intestino delgado (yeyuno e íleon)', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Centro y parte inferior del abdomen, plegado en asas.', funcion: 'Termina la digestión y absorbe la mayor parte de los nutrientes hacia la sangre.', bp3d: { arbol: 'partof', conceptos: ['FMA7207', 'FMA7208'] }, otros: ['yeyuno', 'íleon'] },
  { id: 'intestino-grueso', nombre: 'Intestino grueso', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Rodea el intestino delgado: sube por la derecha, cruza y baja por la izquierda hasta el recto.', funcion: 'Absorbe agua y sales y forma y almacena las heces.', bp3d: { arbol: 'partof', conceptos: ['FMA7201', 'FMA14541'] }, otros: ['colon', 'recto', 'ciego'] },
  { id: 'higado', nombre: 'Hígado', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Parte superior derecha del abdomen, bajo el diafragma.', funcion: 'Transforma nutrientes y sustancias (también muchos fármacos), produce bilis y almacena energía.', bp3d: { arbol: 'partof', conceptos: ['FMA7197'], incluir: 'segment|caudate lobe' }, nota: 'En el modelo, el hígado se forma con sus segmentos; no se muestran los vasos internos.' },
  { id: 'vesicula-biliar', nombre: 'Vesícula biliar', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Bajo el hígado, en el lado derecho del abdomen.', funcion: 'Almacena y concentra la bilis y la vierte al duodeno.', bp3d: { arbol: 'partof', conceptos: ['FMA7202'] } },
  { id: 'pancreas', nombre: 'Páncreas', capa: 'organos', lado: null, sistema: 'Digestivo', ubicacion: 'Detrás del estómago, cruzando el abdomen.', funcion: 'Produce enzimas digestivas y hormonas como la insulina.', bp3d: { arbol: 'partof', conceptos: ['FMA7198'] } },
  { id: 'vena-porta', nombre: 'Vena porta hepática', capa: 'organos', lado: null, sistema: 'Circulatorio', ubicacion: 'Entre el intestino y el hígado, en la parte superior del abdomen.', funcion: 'Lleva al hígado la sangre que viene del intestino, el estómago, el bazo y el páncreas.', bp3d: { arbol: 'partof', conceptos: ['FMA50735'] }, otros: ['porta'] },
  ...rengPar('rinon', 'Riñón', 'organos', 'Urinario', (rengL) => `Parte posterior del abdomen, a la altura de la cintura, ${rengLat(rengL)} de la columna.`, 'Filtra la sangre y forma la orina, por la que se eliminan agua, sales y desechos.', rengPorConcepto('FMA7204', 'FMA7205')),
  ...rengPar('ureter', 'Uréter', 'organos', 'Urinario', (rengL) => `Del riñón a la vejiga, ${rengLat(rengL)}.`, 'Conduce la orina del riñón a la vejiga.', rengPorConcepto('FMA15571', 'FMA15572')),
  { id: 'vejiga', nombre: 'Vejiga urinaria', capa: 'organos', lado: null, sistema: 'Urinario', ubicacion: 'Parte inferior de la pelvis, detrás del pubis.', funcion: 'Almacena la orina hasta que se expulsa.', bp3d: { arbol: 'partof', conceptos: ['FMA15900'] } }
]

export const rengEstructura = (rengId: string): RengEstructura | undefined => RENG_ESTRUCTURAS.find((rengE) => rengE.id === rengId)
