import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-glucotrol-xl'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'glipizida',
    nombre: 'Glipizida',
    clase: 'Antidiabético: sulfonilurea',
    sinonimos: ['glipizide', 'Glucotrol'],
    formula: 'C21H27N5O4S',
    masaMolar: 445.5,
    smiles: 'CC1=CN=C(C=N1)C(=O)NCCC2=CC=C(C=C2)S(=O)(=O)NC(=O)NC3CCCCC3',
    inchikey: 'ZJJXGWJIGJFDTL-UHFFFAOYSA-N',
    cid: 3478,
    estereo: { descripcion: 'Sin estereocentros.' },
    area: 'Diabetes y metabolismo'
  },
  presentaciones: [
    {
      id: 'glipizida-glucotrol-xl',
      producto: 'GLUCOTROL XL (glipizide) comprimidos de liberación prolongada de 2,5, 5 y 10 mg',
      titular: 'Roerig (Pfizer)',
      mercado: 'EE. UU.',
      forma: 'Comprimido de liberación prolongada (sistema osmótico)',
      formaFuente: 'TABLET, EXTENDED RELEASE',
      liberacion: 'prolongada',
      concentraciones: '2,75, 5,49 y 10,98 mg de glipizida por comprimido para liberar dosis de 2,5, 5 y 10 mg',
      excipientes: ['polyethylene oxide', 'hypromellose', 'magnesium stearate', 'sodium chloride', 'red ferric oxide', 'cellulose acetate', 'polyethylene glycol', 'Opadry (blue o white)', 'Opacode Black Ink'],
      usos: { t: 'Junto con dieta y ejercicio, mejorar el control de la glucosa en adultos con diabetes tipo 2. No sirve para la diabetes tipo 1 ni la cetoacidosis.', ref: rengR('1 INDICATIONS AND USAGE', 'GLUCOTROL XL is indicated as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus') },
      fuente: RENG_F,
      advertencias: [{ titulo: 'No masticar ni partir', texto: 'El comprimido no debe masticarse, partirse ni triturarse; a veces se ve en las heces algo parecido a un comprimido: es la cubierta vacía.', organos: ['heces'], ref: rengR('17 PATIENT COUNSELING INFORMATION', 'Inform patients that they should not chew, divide or crush tablets and they may occasionally notice in their stool something that looks like a tablet') }]
    }
  ],
  resumen: {
    contiene: 'Comprimido osmótico de glipizida (sin sal): un núcleo de dos capas (fármaco y capa de empuje) dentro de una membrana de acetato de celulosa con un orificio hecho con láser.',
    usos: 'Diabetes tipo 2, según su etiqueta.',
    actua: 'Estimula al páncreas a liberar insulina: se une al receptor de sulfonilurea de las células beta y cierra sus canales de potasio dependientes de ATP.',
    recorrido: 'El comprimido va soltando la glipizida a lo largo del tubo digestivo durante horas; se absorbe por completo, va casi toda unida a la albúmina, el hígado la transforma y sus metabolitos salen sobre todo por la orina. La cubierta sale entera en las heces.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago', 'intestino-delgado', 'intestino-grueso'],
      llega: 'El comprimido osmótico entra en el tubo digestivo.',
      ocurre: 'No se disgrega. El agua del tubo digestivo atraviesa la membrana, la capa de empuje se hincha y va expulsando la glipizida por un orificio diminuto mientras el comprimido avanza por el intestino. La cubierta, inerte, sale entera con las heces.',
      sigue: 'La glipizida liberada se absorbe a lo largo del intestino.',
      simultaneo: 'Liberación y absorción ocurren a la vez durante horas, mientras el comprimido recorre el intestino.',
      datos: [
        { t: 'Es un núcleo osmótico con una capa de fármaco y otra de empuje, rodeado de una membrana semipermeable; al entrar agua, la capa de empuje expulsa el fármaco por un orificio hecho con láser.', ref: rengR('11 DESCRIPTION › System Components and Performance', 'As water from the gastrointestinal tract enters the tablet, pressure increases in the osmotic layer and "pushes" against the drug layer') },
        { t: 'Los componentes inertes del comprimido permanecen intactos durante el tránsito y se eliminan en las heces como una cubierta insoluble.', ref: rengR('11 DESCRIPTION › System Components and Performance', 'The biologically inert components of the tablet remain intact during GI transit and are eliminated in the feces as an insoluble shell') },
        { t: 'La glipizida es insoluble en agua y alcoholes.', ref: rengR('11 DESCRIPTION', 'It is insoluble in water and alcohols') }
      ],
      formas: ['tableta', 'disuelto'],
      ruta: ['esofago', 'estomago', 'duodeno', 'intestino-delgado', 'intestino-grueso']
    },
    absorcion: {
      organos: ['intestino-delgado', 'intestino-grueso'],
      llega: 'Llega la glipizida que el comprimido va soltando.',
      ocurre: 'A las 2-3 horas empieza a subir en el plasma y alcanza el máximo entre 6 y 12 horas; con una toma al día, los niveles se mantienen 24 horas. La biodisponibilidad absoluta de la glipizida es del 100 %. Si el tránsito intestinal es muy rápido (intestino corto), puede absorberse menos.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'La biodisponibilidad absoluta de la glipizida fue del 100 % tras dosis orales únicas en pacientes con diabetes tipo 2.', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of glipizide was 100% after single oral doses in patients with type 2 diabetes mellitus') },
        { t: 'Desde 2-3 horas después de la toma, las concentraciones suben poco a poco hasta el máximo a las 6-12 horas y se mantienen durante las 24 horas.', ref: rengR(`${RENG_PK} › Absorption`, 'Beginning 2 to 3 hours after administration of GLUCOTROL XL, plasma drug concentrations gradually rise reaching maximum concentrations within 6 to 12 hours after dosing') },
        { t: 'Con un tiempo de permanencia en el tubo digestivo muy reducido (por ejemplo, intestino corto) las concentraciones pueden ser menores.', ref: rengR(`${RENG_PK} › Absorption`, 'Markedly reduced GI retention times of the GLUCOTROL XL tablets over prolonged periods (e.g., short bowel syndrome) may influence the pharmacokinetic profile') }
      ],
      formas: ['tableta', 'disuelto']
    },
    distribucion: {
      organos: ['sangre', 'pancreas'],
      llega: 'La glipizida circula por la sangre.',
      ocurre: 'Un 98-99 % va unida a proteínas, sobre todo albúmina, y su volumen es pequeño (unos 10 L). En el páncreas se une al receptor de sulfonilurea de las células beta, cierra los canales de potasio dependientes de ATP y estas liberan insulina, que baja la glucosa.',
      sigue: 'El hígado la transforma.',
      datos: [{ t: 'Volumen de distribución de unos 10 L tras dosis intravenosas; se une en un 98-99 % a proteínas séricas, sobre todo albúmina.', ref: rengR(`${RENG_PK} › Distribution`, 'Glipizide is 98–99% bound to serum proteins, primarily to albumin') }],
      accion: {
        diana: 'Receptor de sulfonilurea de la membrana de la célula beta (cierra los canales de potasio dependientes de ATP)',
        efecto: 'Estimula la liberación de insulina por el páncreas y baja la glucosa en sangre; requiere células beta funcionales.',
        lugar: ['pancreas'],
        datos: [
          { t: 'Baja la glucosa sobre todo estimulando la liberación de insulina del páncreas, lo que requiere células beta funcionales en los islotes.', ref: rengR('12.1 Mechanism of Action', 'Glipizide primarily lowers blood glucose by stimulating the release of insulin from the pancreas') },
          { t: 'Las sulfonilureas se unen al receptor de sulfonilurea de la membrana de la célula beta y cierran el canal de potasio sensible a ATP, lo que estimula la liberación de insulina.', ref: rengR('12.1 Mechanism of Action', 'Sulfonylureas bind to the sulfonylurea receptor in the pancreatic beta-cell plasma membrane') }
        ]
      }
    },
    metabolismo: {
      organos: ['higado'],
      llega: 'La glipizida llega al hígado.',
      ocurre: 'Se elimina sobre todo por transformación en el hígado. Los metabolitos principales, de hidroxilación aromática, no bajan la glucosa. Un metabolito menor (menos del 2 %) conserva de una décima a un tercio de la actividad.',
      sigue: 'Los metabolitos van sobre todo a los riñones.',
      datos: [
        { t: 'Se elimina principalmente por biotransformación hepática; menos del 10 % sale sin cambios.', ref: rengR(`${RENG_PK} › Elimination`, 'Glipizide is eliminated primarily by hepatic biotransformation') },
        { t: 'Los metabolitos principales son productos de hidroxilación aromática sin actividad hipoglucemiante.', ref: rengR(`${RENG_PK} › Metabolism`, 'The major metabolites of glipizide are products of aromatic hydroxylation and have no hypoglycemic activity') }
      ],
      metabolitos: [
        { nombre: 'Metabolitos de hidroxilación aromática', actividad: 'inactivo', ref: rengR(`${RENG_PK} › Metabolism`, 'are products of aromatic hydroxylation and have no hypoglycemic activity') },
        { nombre: 'Derivado acetilamino-etil-benceno', nombreFuente: 'acetylamino-ethyl benzene derivative', actividad: 'activo', nota: 'Menos del 2 % de la dosis; de 1/10 a 1/3 de la actividad del original.', ref: rengR(`${RENG_PK} › Metabolism`, 'A minor metabolite, an acetylamino-ethyl benzene derivative, which accounts for less than 2% of a dose') }
      ]
    },
    excrecion: {
      organos: ['rinones', 'orina', 'heces'],
      llega: 'Los metabolitos llegan a los riñones y al intestino.',
      ocurre: 'Un 90 % de la dosis sale como metabolitos: un 80 % por la orina y un 10 % por las heces. Menos del 10 % sale sin cambios. La semivida de la glipizida es de 2-5 horas; el comprimido de liberación prolongada mantiene los niveles todo el día.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 90 % de la dosis se excreta como productos de biotransformación en la orina (80 %) y las heces (10 %).', ref: rengR(`${RENG_PK} › Elimination`, 'approximately 90% of a dose is excreted as biotransformation products in urine (80%) and feces (10%)') },
        { t: 'La semivida terminal media osciló entre 2 y 5 horas.', ref: rengR(`${RENG_PK} › Elimination`, 'The mean terminal elimination half-life of glipizide ranged from 2 to 5 hours') }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad absoluta', valor: '100', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'The absolute bioavailability of glipizide was 100%') },
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (XL)', valor: '6-12', unidad: 'h', ref: rengR(`${RENG_PK} › Absorption`, 'reaching maximum concentrations within 6 to 12 hours after dosing') },
    { magnitud: 'vd', nombre: 'Volumen de distribución (IV)', valor: '≈ 10', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'The mean volume of distribution was approximately 10 liters') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '98-99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, '98–99% bound to serum proteins') },
    { magnitud: 'semivida', nombre: 'Semivida terminal', valor: '2-5', unidad: 'h', ref: rengR(`${RENG_PK} › Elimination`, 'ranged from 2 to 5 hours') },
    { magnitud: 'orina', nombre: 'Metabolitos en la orina', valor: '80', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, 'in urine (80%) and feces (10%)') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, 'eed99b60-d043-4249-9b2a-f05e46fb588d', 'GLUCOTROL XL (glipizide) tablet, extended release', 'GLUCOTROL XL (Roerig)', '28', '2026-07-23', '2026-11-10'), rengPubchem(3478, 'Glipizide', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
