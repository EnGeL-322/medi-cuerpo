import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco, type RengRef } from '../modelo'

const RENG_F = 'dailymed-singulair'
const rengR = (rengSec: string, rengCita: string): RengRef => ({ f: RENG_F, sec: rengSec, cita: rengCita })
const RENG_PK = '12.3 Pharmacokinetics'

export default {
  activo: {
    id: 'montelukast',
    nombre: 'Montelukast',
    clase: 'Antagonista del receptor de leucotrienos (CysLT1)',
    sinonimos: ['montelukast', 'Singulair'],
    formula: 'C35H36ClNO3S',
    masaMolar: 586.2,
    smiles: 'CC(C)(C1=CC=CC=C1CC[C@H](C2=CC=CC(=C2)/C=C/C3=NC4=C(C=CC(=C4)Cl)C=C3)SCC5(CC5)CC(=O)O)O',
    inchikey: 'UCHDWCPVSPXUMX-TZIWLTJVSA-N',
    cid: 5281040,
    estereo: { descripcion: 'Un estereocentro (R) y un doble enlace E: es ópticamente activo.' },
    area: 'Respiratorio y alergia'
  },
  presentaciones: [
    {
      id: 'montelukast-singulair',
      producto: 'SINGULAIR (montelukast sodium) comprimidos recubiertos de 10 mg',
      titular: 'Organon LLC',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '10 mg de montelukast por comprimido',
      sal: { nombre: 'Montelukast sódico (sal monosódica); 10,4 mg equivalen a 10 mg de montelukast', ref: rengR('11 DESCRIPTION', 'Each 10-mg film-coated SINGULAIR tablet contains 10.4 mg montelukast sodium') },
      excipientes: ['microcrystalline cellulose', 'lactose monohydrate', 'croscarmellose sodium', 'hydroxypropyl cellulose', 'magnesium stearate', 'recubrimiento: hydroxypropyl methylcellulose, hydroxypropyl cellulose, titanium dioxide, red ferric oxide, yellow ferric oxide, carnauba wax'],
      usos: { t: 'Prevención y tratamiento crónico del asma desde los 12 meses, prevención de la broncoconstricción por ejercicio y alivio de la rinitis alérgica cuando otras opciones no bastan. No sirve para una crisis aguda.', ref: rengR('1 INDICATIONS AND USAGE', 'Prophylaxis and chronic treatment of asthma in patients 12 months of age and older') },
      fuente: RENG_F,
      nota: 'La etiqueta incluye comprimidos masticables (4 y 5 mg) y granulado (4 mg), con otros tiempos hasta el máximo; aquí se describe el comprimido de 10 mg.'
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con montelukast sódico (la sal del activo), celulosa, lactosa y croscarmelosa.',
    usos: 'Asma, broncoconstricción por ejercicio y rinitis alérgica, según su etiqueta.',
    actua: 'Bloquea el receptor CysLT1 de los leucotrienos en las vías respiratorias: frena el edema, la contracción del músculo y la inflamación que causan.',
    recorrido: 'Biodisponibilidad del 64 %, máximo a las 3-4 horas, casi todo unido a proteínas, el hígado lo metaboliza (sobre todo CYP2C8) y sale casi solo por la bilis.'
  },
  recorrido: {
    liberacion: {
      organos: ['boca', 'esofago', 'estomago'],
      llega: 'El comprimido recubierto llega al estómago.',
      ocurre: 'Se disgrega y libera el montelukast sódico, muy soluble en agua.',
      sigue: 'Pasa al intestino.',
      datos: [{ t: 'El montelukast sódico es muy soluble en etanol, metanol y agua.', ref: rengR('11 DESCRIPTION', 'Montelukast sodium is freely soluble in ethanol, methanol, and water') }, RENG_GENERAL.disgregar]
    },
    absorcion: {
      organos: [],
      organosGenerales: ['intestino-delgado', 'vena-porta'],
      llega: 'Llega el montelukast disuelto.',
      ocurre: 'Se absorbe rápido: con el comprimido de 10 mg en ayunas, el máximo llega a las 3-4 horas y la biodisponibilidad es del 64 %. Una comida estándar por la mañana no la cambia.',
      sigue: 'Pasa a la sangre.',
      datos: [
        { t: 'Con el comprimido de 10 mg en ayunas, el máximo se alcanza a las 3-4 horas; la biodisponibilidad oral media es del 64 %.', ref: rengR(`${RENG_PK} › Absorption`, 'the mean peak montelukast plasma concentration (C max ) is achieved in 3 to 4 hours (T max ). The mean oral bioavailability is 64%'), poblacion: 'adultos', condiciones: 'en ayunas' },
        { t: 'Una comida estándar por la mañana no influye en la biodisponibilidad ni en la Cmax.', ref: rengR(`${RENG_PK} › Absorption`, 'The oral bioavailability and C max are not influenced by a standard meal in the morning') }
      ],
      sinDatos: ['Tramo del intestino donde se absorbe']
    },
    distribucion: {
      organos: ['sangre', 'vias-respiratorias'],
      llega: 'El montelukast circula por la sangre.',
      ocurre: 'Más del 99 % va unido a proteínas; su volumen de distribución es pequeño (8-11 L). En las vías respiratorias se une al receptor CysLT1 del músculo liso y de los macrófagos y bloquea a los leucotrienos, que causan edema, broncoconstricción e inflamación.',
      sigue: 'El hígado lo metaboliza.',
      datos: [{ t: 'Más del 99 % se une a proteínas plasmáticas; volumen de distribución en estado estacionario de 8 a 11 litros.', ref: rengR(`${RENG_PK} › Distribution`, 'Montelukast is more than 99% bound to plasma proteins') }],
      accion: {
        diana: 'Receptor CysLT1 de los leucotrienos cisteinílicos',
        efecto: 'Reduce el edema, la contracción del músculo liso bronquial y la inflamación mediados por leucotrienos.',
        lugar: ['vias-respiratorias'],
        datos: [
          { t: 'Se une con alta afinidad y selectividad al receptor CysLT1 e inhibe las acciones del LTD4 sin actividad agonista.', ref: rengR('12.1 Mechanism of Action', 'Montelukast inhibits physiologic actions of LTD 4 at the CysLT 1 receptor without any agonist activity') },
          { t: 'El receptor CysLT1 está en las vías respiratorias (músculo liso y macrófagos) y en células proinflamatorias; en el asma los leucotrienos causan edema y contracción del músculo liso.', ref: rengR('12.1 Mechanism of Action', 'The CysLT type-1 (CysLT 1 ) receptor is found in the human airway') }
        ]
      }
    },
    metabolismo: {
      organos: [],
      organosGenerales: ['higado'],
      llega: 'El montelukast llega a las enzimas que lo transforman.',
      ocurre: 'Se metaboliza ampliamente: según microsomas de hígado humano intervienen CYP3A4, 2C8 y 2C9, sobre todo el 2C8. Con dosis habituales, sus metabolitos no se detectan en el plasma. En la cirrosis su metabolismo es menor.',
      sigue: 'El montelukast y sus metabolitos pasan a la bilis.',
      datos: [
        { t: 'Se metaboliza ampliamente; con dosis terapéuticas los metabolitos no se detectan en el plasma en estado estacionario.', ref: rengR(`${RENG_PK} › Metabolism`, 'Montelukast is extensively metabolized') },
        { t: 'Intervienen CYP3A4, 2C8 y 2C9; el 2C8 parece el principal.', ref: rengR(`${RENG_PK} › Metabolism`, 'At clinically relevant concentrations, 2C8 appears to play a major role in the metabolism of montelukast') },
        { t: 'Con insuficiencia hepática leve a moderada y cirrosis, el metabolismo disminuye y el AUC es un 41 % mayor.', ref: rengR(`${RENG_PK} › Patients with Hepatic Impairment`, 'had evidence of decreased metabolism of montelukast'), poblacion: 'insuficiencia hepática' },
        RENG_GENERAL.higado
      ],
      metabolitos: [{ nombre: 'Metabolitos (no detectables en plasma con dosis habituales)', actividad: 'desconocida', ref: rengR(`${RENG_PK} › Metabolism`, 'plasma concentrations of metabolites of montelukast are undetectable at steady state') }]
    },
    excrecion: {
      organos: ['bilis', 'heces'],
      llega: 'El montelukast y sus metabolitos llegan a la bilis.',
      ocurre: 'Con montelukast marcado, un 86 % se recuperó en las heces en 5 días y menos del 0,2 % en la orina: se excreta casi exclusivamente por la bilis. Su semivida es de 2,7 a 5,5 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        { t: 'Un 86 % de la radiactividad se recuperó en las heces en 5 días y menos del 0,2 % en la orina: el montelukast y sus metabolitos se excretan casi solo por la bilis.', ref: rengR(`${RENG_PK} › Elimination`, 'this indicates that montelukast and its metabolites are excreted almost exclusively via the bile') },
        { t: 'Semivida plasmática media de 2,7 a 5,5 horas en adultos jóvenes sanos.', ref: rengR(`${RENG_PK} › Elimination`, 'the mean plasma half-life of montelukast ranged from 2.7 to 5.5 hours in healthy young adults'), poblacion: 'adultos jóvenes sanos' }
      ],
      formas: ['metabolito']
    }
  },
  cifras: [
    { magnitud: 'tmax', nombre: 'Tiempo hasta la concentración máxima (10 mg)', valor: '3-4', unidad: 'h', condiciones: 'en ayunas', ref: rengR(`${RENG_PK} › Absorption`, 'is achieved in 3 to 4 hours') },
    { magnitud: 'biodisponibilidad', nombre: 'Biodisponibilidad oral (10 mg)', valor: '64', unidad: '%', ref: rengR(`${RENG_PK} › Absorption`, 'The mean oral bioavailability is 64%') },
    { magnitud: 'union', nombre: 'Unión a proteínas', valor: '> 99', unidad: '%', ref: rengR(`${RENG_PK} › Distribution`, 'more than 99% bound to plasma proteins') },
    { magnitud: 'vd', nombre: 'Volumen de distribución', valor: '8-11', unidad: 'L', ref: rengR(`${RENG_PK} › Distribution`, 'averages 8 to 11 liters') },
    { magnitud: 'heces', nombre: 'Radiactividad en heces (5 días)', valor: '86', unidad: '% de la dosis', ref: rengR(`${RENG_PK} › Elimination`, '86% of the radioactivity was recovered in 5-day fecal collections') },
    { magnitud: 'semivida', nombre: 'Semivida plasmática media', valor: '2,7-5,5', unidad: 'h', poblacion: 'adultos jóvenes sanos', ref: rengR(`${RENG_PK} › Elimination`, 'ranged from 2.7 to 5.5 hours') }
  ],
  fuentes: [rengEtiquetaFDA(RENG_F, '482dcc92-b47f-4ea6-854a-f5ac2aea7842', 'SINGULAIR (montelukast sodium) granule; tablet, chewable; tablet, film coated', 'SINGULAIR (Organon LLC)', '5', '2025-06-25', '2026-11-10'), rengPubchem(5281040, 'Montelukast', '2026-11-10')],
  estado: 'completa'
} satisfies RengFichaFarmaco
