export interface RengDestino {
  id: string
  nombre: string
  sistema: string
  malla: string[]
  sistemaMalla?: string[]
  nota?: string
}

const RENG_RINONES = ['rinon-derecho', 'rinon-izquierdo']
const RENG_URETERES = ['ureter-derecho', 'ureter-izquierdo']
const RENG_PULMONES = ['pulmon-derecho', 'pulmon-izquierdo']
const RENG_CIRCULACION = ['corazon', 'aorta']
const RENG_HUESOS = ['craneo', 'columna', 'costillas-derecho', 'costillas-izquierdo', 'esternon', 'coxal-derecho', 'coxal-izquierdo', 'sacro', 'femur-derecho', 'femur-izquierdo', 'tibia-derecho', 'tibia-izquierdo', 'humero-derecho', 'humero-izquierdo']
const RENG_MUSCULOS = ['pectoral-mayor-derecho', 'pectoral-mayor-izquierdo', 'deltoides-derecho', 'deltoides-izquierdo', 'biceps-braquial-derecho', 'biceps-braquial-izquierdo', 'recto-femoral-derecho', 'recto-femoral-izquierdo', 'gastrocnemio-derecho', 'gastrocnemio-izquierdo']

export const RENG_DESTINOS: RengDestino[] = [
  { id: 'boca', nombre: 'Boca', sistema: 'Digestivo', malla: [], sistemaMalla: ['esofago'], nota: 'El atlas no tiene boca: se señala el comienzo del tubo digestivo.' },
  { id: 'esofago', nombre: 'Esófago', sistema: 'Digestivo', malla: ['esofago'] },
  { id: 'estomago', nombre: 'Estómago', sistema: 'Digestivo', malla: ['estomago'] },
  { id: 'duodeno', nombre: 'Duodeno', sistema: 'Digestivo', malla: ['duodeno'] },
  { id: 'intestino-delgado', nombre: 'Intestino delgado', sistema: 'Digestivo', malla: ['duodeno', 'intestino-delgado'] },
  { id: 'intestino-grueso', nombre: 'Intestino grueso (colon)', sistema: 'Digestivo', malla: ['intestino-grueso'] },
  { id: 'heces', nombre: 'Heces', sistema: 'Digestivo', malla: ['intestino-grueso'], nota: 'Se elimina con las heces a través del intestino grueso.' },
  { id: 'luz-intestinal', nombre: 'Interior del intestino', sistema: 'Digestivo', malla: ['intestino-delgado', 'intestino-grueso'] },
  { id: 'higado', nombre: 'Hígado', sistema: 'Digestivo', malla: ['higado'] },
  { id: 'bilis', nombre: 'Bilis (vía biliar)', sistema: 'Digestivo', malla: ['higado', 'vesicula-biliar', 'duodeno'], nota: 'La bilis sale del hígado al duodeno; la vesícula la almacena.' },
  { id: 'pancreas', nombre: 'Páncreas', sistema: 'Digestivo', malla: ['pancreas'] },
  { id: 'vena-porta', nombre: 'Vena porta hepática', sistema: 'Circulatorio', malla: ['vena-porta'] },
  { id: 'sangre', nombre: 'Sangre (circulación general)', sistema: 'Circulatorio', malla: RENG_CIRCULACION, nota: 'La sangre no tiene malla: se señalan el corazón y la aorta.' },
  { id: 'corazon', nombre: 'Corazón', sistema: 'Circulatorio', malla: ['corazon'] },
  { id: 'vasos', nombre: 'Vasos sanguíneos', sistema: 'Circulatorio', malla: ['aorta'], nota: 'Se señala la aorta como ejemplo de arteria.' },
  { id: 'plaquetas', nombre: 'Plaquetas', sistema: 'Circulatorio (sangre)', malla: [], sistemaMalla: RENG_CIRCULACION, nota: 'Las plaquetas circulan en la sangre: se señala el sistema circulatorio.' },
  { id: 'medula-osea', nombre: 'Médula ósea', sistema: 'Hematopoyético', malla: [], sistemaMalla: ['femur-derecho', 'femur-izquierdo', 'coxal-derecho', 'coxal-izquierdo'], nota: 'La médula ósea está dentro de los huesos: se señalan algunos huesos que la contienen.' },
  { id: 'pulmones', nombre: 'Pulmones', sistema: 'Respiratorio', malla: RENG_PULMONES },
  { id: 'vias-respiratorias', nombre: 'Vías respiratorias', sistema: 'Respiratorio', malla: RENG_PULMONES, nota: 'El modelo representa el árbol bronquial de los pulmones.' },
  { id: 'encefalo', nombre: 'Encéfalo (sistema nervioso central)', sistema: 'Nervioso', malla: ['encefalo'] },
  { id: 'nervios', nombre: 'Nervios periféricos', sistema: 'Nervioso', malla: [], sistemaMalla: ['encefalo', 'columna'], nota: 'El atlas no tiene nervios periféricos: se señalan el encéfalo y la columna (que protege la médula espinal).' },
  { id: 'rinones', nombre: 'Riñones', sistema: 'Urinario', malla: RENG_RINONES },
  { id: 'vias-urinarias', nombre: 'Vías urinarias (uréteres y vejiga)', sistema: 'Urinario', malla: [...RENG_URETERES, 'vejiga'] },
  { id: 'orina', nombre: 'Orina', sistema: 'Urinario', malla: [...RENG_RINONES, ...RENG_URETERES, 'vejiga'], nota: 'Se forma en los riñones y se almacena en la vejiga.' },
  { id: 'vejiga', nombre: 'Vejiga urinaria', sistema: 'Urinario', malla: ['vejiga'] },
  { id: 'prostata', nombre: 'Próstata', sistema: 'Reproductor masculino', malla: [], sistemaMalla: ['vejiga'], nota: 'El atlas no tiene próstata: está justo debajo de la vejiga.' },
  { id: 'huesos', nombre: 'Huesos', sistema: 'Esquelético', malla: RENG_HUESOS },
  { id: 'articulaciones', nombre: 'Articulaciones', sistema: 'Esquelético', malla: [], sistemaMalla: ['femur-derecho', 'tibia-derecho', 'humero-derecho'], nota: 'El atlas no tiene articulaciones: se señalan huesos que las forman.' },
  { id: 'musculos', nombre: 'Músculos esqueléticos', sistema: 'Muscular', malla: RENG_MUSCULOS },
  { id: 'piel', nombre: 'Piel', sistema: 'Tegumentario', malla: [], nota: 'El atlas no tiene piel.' },
  { id: 'unas', nombre: 'Uñas', sistema: 'Tegumentario', malla: [], nota: 'El atlas no tiene uñas.' },
  { id: 'tiroides', nombre: 'Glándula tiroides', sistema: 'Endocrino', malla: [], nota: 'El atlas no tiene tiroides (está en el cuello, delante de la tráquea).' },
  { id: 'tejidos', nombre: 'Tejidos de todo el cuerpo', sistema: 'Todo el cuerpo', malla: [], sistemaMalla: RENG_CIRCULACION, nota: 'Actúa en muchos tejidos: se señala la circulación que lo reparte.' },
  { id: 'tejido-adiposo', nombre: 'Tejido adiposo', sistema: 'Metabólico', malla: [], nota: 'El atlas no tiene tejido adiposo.' },
  { id: 'mama', nombre: 'Mama', sistema: 'Reproductor', malla: [], nota: 'El atlas no tiene tejido mamario.' },
  { id: 'organos-reproductores', nombre: 'Órganos reproductores', sistema: 'Reproductor', malla: [], sistemaMalla: ['vejiga'], nota: 'El atlas no tiene órganos reproductores: se señala la pelvis.' },
  { id: 'ojos', nombre: 'Ojos', sistema: 'Sentidos', malla: [], sistemaMalla: ['craneo'], nota: 'El atlas no tiene globos oculares: se señala el cráneo.' },
  { id: 'sistema-inmunitario', nombre: 'Sistema inmunitario', sistema: 'Inmunitario', malla: [], sistemaMalla: RENG_CIRCULACION, nota: 'Sus células circulan en la sangre: se señala el sistema circulatorio.' },
  { id: 'sitio-infeccion', nombre: 'Lugar de la infección', sistema: 'Según la infección', malla: [], nota: 'Depende de dónde esté la infección (las indicaciones de la ficha dicen cuáles).' }
]

export const rengDestino = (rengId: string): RengDestino | undefined => RENG_DESTINOS.find((rengD) => rengD.id === rengId)

export function rengMallasDe(rengIds: readonly string[]): { propias: string[]; sistema: string[] } {
  const rengPropias = new Set<string>()
  const rengSistema = new Set<string>()
  for (const rengId of rengIds) {
    const rengD = rengDestino(rengId)
    if (!rengD) continue
    rengD.malla.forEach((rengM) => rengPropias.add(rengM))
    if (!rengD.malla.length) rengD.sistemaMalla?.forEach((rengM) => rengSistema.add(rengM))
  }
  return { propias: [...rengPropias], sistema: [...rengSistema].filter((rengM) => !rengPropias.has(rengM)) }
}
