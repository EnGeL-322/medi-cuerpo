import { RENG_GENERAL } from '../generales'
import { rengFichaCIMA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_FT = 'cima-43775'
const rengFt = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_FT, sec: rengSec, cita: rengCita })
const RENG_PK = '5.2 Propiedades farmacocinéticas'

export default {
  activo: {
    id: 'alopurinol',
    nombre: 'Alopurinol',
    clase: 'Inhibidor de la xantina oxidasa (análogo de la hipoxantina)',
    sinonimos: ['allopurinol', 'Zyloric'],
    formula: 'C5H4N4O',
    masaMolar: 136.11,
    smiles: 'C1=NNC2=C1C(=O)NC=N2',
    inchikey: 'OFCNXPDARWKPPY-UHFFFAOYSA-N',
    cid: 135401907,
    iupac: '1,5-dihidro-4H-pirazolo[3,4-d]pirimidin-4-ona',
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Reumatología y metabolismo'
  },
  presentaciones: [
    {
      id: 'alopurinol-zyloric-100',
      producto: 'Zyloric 100 mg comprimidos',
      titular: 'Faes Farma S.A.',
      mercado: 'España (UE)',
      forma: 'Comprimido ranurado',
      formaFuente: 'Comprimido',
      liberacion: 'no declarada',
      concentraciones: '100 mg de alopurinol por comprimido',
      excipientes: ['lactosa monohidrato', 'almidón de maíz', 'povidona', 'estearato de magnesio'],
      usos: { t: 'Reducir el ácido úrico y los uratos en los líquidos del cuerpo y en la orina cuando la dieta o el control de la causa no bastan: gota, cálculos de ácido úrico, enfermedades con mucho recambio celular y algunas alteraciones enzimáticas, entre otros.', ref: rengFt('4.1 Indicaciones terapéuticas', 'Reducción de las concentraciones de urato en los líquidos corporales y/o en la orina para prevenir o eliminar los depósitos de ácido úrico y uratos') },
      fuente: RENG_FT,
      nota: 'Existe también Zyloric 300 mg con los mismos excipientes.'
    }
  ],
  resumen: {
    contiene: 'Comprimido con 100 mg de alopurinol (sin sal), lactosa, almidón de maíz y povidona.',
    usos: 'Bajar el ácido úrico: gota, cálculos de ácido úrico y otros estados con exceso de urato, según su ficha técnica.',
    actua: 'Él y su metabolito oxipurinol inhiben la xantina oxidasa, la enzima que convierte la hipoxantina y la xantina en ácido úrico.',
    recorrido: 'Se absorbe rápido en la parte alta del tubo digestivo, casi no se une a proteínas, se transforma sobre todo en oxipurinol (de vida larga) y este sale por la orina.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido llega al estómago.',
      ocurre: 'Se disgrega y libera el alopurinol.',
      sigue: 'Se absorbe en la parte alta del tubo digestivo.',
      datos: [{ t: 'Cada comprimido contiene 100 mg de alopurinol y 138,5 mg de lactosa monohidrato.', ref: rengFt('2 Composición cualitativa y cuantitativa', 'Cada comprimido contiene 100 mg de alopurinol') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: ['estomago', 'duodeno', 'intestino-delgado'],
      llega: 'Llega el alopurinol liberado.',
      ocurre: 'Se absorbe rápido por el tracto gastrointestinal superior: aparece en la sangre a los 30-60 minutos y su máximo llega hacia la hora y media. La biodisponibilidad medida va del 67 al 90 %.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Se ha detectado en sangre 30-60 minutos después de tomarlo; la biodisponibilidad medida varía entre el 67 % y el 90 %.', ref: rengFt(RENG_PK, 'Las determinaciones de biodisponibilidad varían entre el 67% y el 90%') },
        { t: 'El máximo de alopurinol en plasma suele aparecer 1,5 horas después de la toma y apenas se detecta a las 6 horas.', ref: rengFt(RENG_PK, 'Los niveles plasmáticos máximos de alopurinol generalmente aparecen 1,5 horas después de la administración') }
      ]
    },
    distribucion: {
      organos: ['sangre', 'higado', 'intestino-delgado'],
      llega: 'El alopurinol circula por la sangre.',
      ocurre: 'Apenas se une a proteínas. Su volumen aparente (1,6 L/kg) sugiere que los tejidos lo captan bastante. No se han medido sus concentraciones en tejidos humanos, pero es probable que sean más altas en el hígado y la mucosa intestinal, donde la xantina oxidasa es más activa. Allí, él y el oxipurinol frenan la formación de ácido úrico.',
      sigue: 'Se transforma en oxipurinol.',
      datos: [
        { t: 'Apenas se une a proteínas plasmáticas; su volumen de distribución aparente es de unos 1,6 L/kg.', ref: rengFt(`${RENG_PK} › Distribución`, 'El volumen de distribución aparente de alopurinol es de, aproximadamente 1,6 l/kg') },
        { t: 'No se han medido sus concentraciones en tejidos humanos; probablemente son mayores en el hígado y la mucosa intestinal, donde la xantina oxidasa es más activa.', ref: rengFt(`${RENG_PK} › Distribución`, 'es probable que alopurinol y oxipurinol estén presentes a las concentraciones más altas en el hígado y en la mucosa intestinal') }
      ],
      accion: {
        diana: 'Xantina oxidasa',
        efecto: 'Reduce la formación de ácido úrico y baja su concentración en plasma y orina.',
        lugar: ['higado', 'intestino-delgado'],
        datos: [{ t: 'El alopurinol y el oxipurinol bajan el ácido úrico en plasma y orina al inhibir la xantina oxidasa, que oxida la hipoxantina a xantina y la xantina a ácido úrico.', ref: rengFt('5.1 Propiedades farmacodinámicas › Mecanismo de acción', 'Alopurinol y su principal metabolito oxipurinol disminuyen el nivel de ácido úrico en plasma y en orina por inhibición de la xantinoxidasa') }]
      }
    },
    metabolismo: {
      organos: [],
      llega: 'El alopurinol llega a la xantina oxidasa y a la aldehído oxidasa.',
      ocurre: 'Esas enzimas lo convierten sobre todo en oxipurinol, que también inhibe la xantina oxidasa (algo menos) pero dura mucho más: su semivida es de 13 a 30 horas, frente a 0,5-1,5 horas del alopurinol. Por eso una sola toma diaria mantiene el efecto. Se forman además ribósidos menores.',
      sigue: 'El oxipurinol va a los riñones.',
      datos: [
        { t: 'Se elimina sobre todo por conversión a oxipurinol mediante la xantina oxidasa y la aldehído oxidasa; menos del 10 % sale inalterado por la orina.', ref: rengFt(`${RENG_PK} › Eliminación`, 'La eliminación de alopurinol tiene lugar principalmente por conversión metabólica a oxipurinol mediante la xantina oxidasa y la aldehído oxidasa') },
        { t: 'El alopurinol tiene una semivida plasmática de 0,5 a 1,5 horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Alopurinol presenta una semivida plasmática de 0.5 a 1.5 horas') },
        { t: 'El oxipurinol inhibe la xantina oxidasa con menos potencia, pero su semivida es de 13 a 30 horas, así que una dosis diaria mantiene la inhibición 24 horas.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Oxipurinol es un inhibidor menos potente de la xantina oxidasa que alopurinol') }
      ],
      sinDatos: ['Órgano donde se forma el oxipurinol'],
      metabolitos: [
        { nombre: 'Oxipurinol (aloxantina)', nombreFuente: 'oxipurinol', actividad: 'activo', nota: 'Inhibidor de la xantina oxidasa con semivida de 13-30 horas.', ref: rengFt(`${RENG_PK} › Metabolismo`, 'El principal metabolito del alopurinol es el oxipurinol') },
        { nombre: 'Alopurinol-ribósido y oxipurinol-7-ribósido', actividad: 'desconocida', ref: rengFt(`${RENG_PK} › Metabolismo`, 'Otros metabolitos de alopurinol incluyen alopurinol-ribósido y oxipurinol-7-ribósido') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'El oxipurinol llega a los riñones; parte del alopurinol tomado queda en el intestino.',
      ocurre: 'Un 20 % del alopurinol tomado sale con las heces. El oxipurinol se elimina sin cambios por la orina, pero despacio, porque los túbulos renales lo reabsorben. En la insuficiencia renal ambos se eliminan mucho peor.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Aproximadamente un 20 % del alopurinol ingerido se excreta con las heces.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Aproximadamente un 20% del alopurinol ingerido se excreta con las heces') },
        { t: 'El oxipurinol se elimina inalterado por la orina, con una semivida prolongada (13,6-29 horas) porque sufre reabsorción tubular.', ref: rengFt(`${RENG_PK} › Eliminación`, 'Oxipurinol se elimina inalterado por orina pero presenta una prolongada semivida de eliminación ya que sufre reabsorción tubular') },
        { t: 'Con mala función renal, el aclaramiento de alopurinol y oxipurinol está muy reducido.', ref: rengFt(`${RENG_PK} › Insuficiencia renal`, 'El aclaramiento de alopurinol y oxipurinol está muy reducido en pacientes con pobre función renal'), poblacion: 'insuficiencia renal' }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad', valor: '67-90', unidad: '%', ref: rengFt(RENG_PK, 'varían entre el 67% y el 90%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo de alopurinol', valor: '1,5', unidad: 'h', ref: rengFt(RENG_PK, 'generalmente aparecen 1,5 horas después de la administración') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta el máximo de oxipurinol', valor: '3-5', unidad: 'h', ref: rengFt(RENG_PK, 'Los niveles plasmáticos máximos de oxipurinol generalmente aparecen 3-5 horas después') },
    { magnitud: 'vd', nombre: 'Volumen de distribución aparente', valor: '≈ 1,6', unidad: 'L/kg', ref: rengFt(`${RENG_PK} › Distribución`, 'aproximadamente 1,6 l/kg') },
    { magnitud: 'semivida', nombre: 'Semivida del alopurinol', valor: '0,5-1,5', unidad: 'h', ref: rengFt(`${RENG_PK} › Eliminación`, 'semivida plasmática de 0.5 a 1.5 horas') },
    { magnitud: 'semivida', nombre: 'Semivida del oxipurinol', valor: '13-30', unidad: 'h', ref: rengFt(`${RENG_PK} › Eliminación`, 'oscilando entre 13 y 30 horas en el hombre') },
    { magnitud: 'heces', nombre: 'Excretado con las heces', valor: '≈ 20', unidad: '% de la dosis', ref: rengFt(`${RENG_PK} › Eliminación`, 'Aproximadamente un 20% del alopurinol ingerido se excreta con las heces') }
  ],
  fuentes: [rengFichaCIMA(RENG_FT, '43775', 'Zyloric 100 mg comprimidos (Faes Farma S.A.)', '2025-01-22', '2026-11-10'), rengPubchem(135401907, 'Allopurinol', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
