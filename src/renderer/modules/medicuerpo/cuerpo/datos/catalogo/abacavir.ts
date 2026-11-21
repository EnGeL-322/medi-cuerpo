import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'abacavir',
    nombre: 'Abacavir',
    clase: 'Antirretroviral (análogo de nucleósido, inhibidor de la transcriptasa inversa)',
    sinonimos: [ 'abacavir', 'Ziagen' ],
    formula: 'C14H18N6O',
    masaMolar: 286.33,
    smiles: 'C1CC1NC2=C3C(=NC(=N2)N)N(C=N3)[C@@H]4C[C@@H](C=C4)CO',
    inchikey: 'MCGSCOLBFJQGHM-SCZZXKLOSA-N',
    cid: 441300,
    iupac: '[(1S,4R)-4-[2-amino-6-(cyclopropylamino)purin-9-yl]cyclopent-2-en-1-yl]methanol',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'abacavir-oral',
      producto: 'ZIAGEN · solución oral',
      titular: 'VIIV HEALTHCARE COMPANY',
      mercado: 'EE. UU.',
      forma: 'Solución oral',
      formaFuente: 'SOLUTION',
      liberacion: 'no declarada',
      concentraciones: '20 mg de abacavir por mL (como sulfato de abacavir)',
      sal: {
        nombre: 'Sulfato de abacavir',
        ref: {
          f: 'dailymed-abacavir',
          sec: '3 · Formas y concentraciones',
          cita: 'ZIAGEN oral solution contains 20 mg per mL of abacavir',
          codigo: '43678-2'
        }
      },
      excipientes: [
        'anhydrous citric acid',
        'methylparaben',
        'propylparaben',
        'propylene glycol',
        'saccharin sodium',
        'trisodium citrate dihydrate',
        'sorbitol',
        'water'
      ],
      usos: {
        t: 'Infección por VIH-1, junto con otros antirretrovirales.',
        ref: {
          f: 'dailymed-abacavir',
          sec: '1 · Indicaciones',
          cita: 'in combination with other antiretroviral agents, are indicated for the treatment of human immunodeficiency virus (HIV-1) infection',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-abacavir',
      advertencias: [
        {
          titulo: 'Reacciones de hipersensibilidad',
          texto: 'Se han producido reacciones de hipersensibilidad graves y a veces mortales; el riesgo es mayor en portadores del alelo HLA-B*5701.',
          organos: [ 'piel', 'sistema-inmunitario' ],
          ref: {
            f: 'dailymed-abacavir',
            sec: 'Advertencia destacada',
            cita: 'Serious and sometimes fatal hypersensitivity reactions, with multiple organ involvement, have occurred with ZIAGEN (abacavir)',
            codigo: '34066-1'
          }
        }
      ],
      reacciones: [
        [
          'En adultos (≥ 10 %, al menos moderadas): náuseas, dolor de cabeza, malestar y cansancio, vómitos y trastornos del sueño.',
          '34084-4',
          'were nausea, headache, malaise and fatigue, nausea and vomiting, and dreams/sleep disorders'
        ],
        [
          'En niños (≥ 5 %): fiebre o escalofríos, náuseas y vómitos, erupciones e infecciones de oído, nariz o garganta.',
          '34084-4',
          'were fever and/or chills, nausea and vomiting, skin rashes, and ear/nose/throat infections'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Solución oral: 20 mg de abacavir por mL (como sulfato de abacavir). Los excipientes no son el principio activo.',
    usos: 'Infección por VIH-1, junto con otros antirretrovirales.',
    actua: 'Es un análogo de nucleósido: las enzimas de la célula lo convierten en trifosfato de carbovir, que inhibe la transcriptasa inversa del VIH-1 compitiendo con el sustrato natural e incorporándose al ADN viral.',
    recorrido: 'Se absorbe rápido y se reparte ampliamente; la biodisponibilidad absoluta del comprimido es del 83 %. La comida no cambia la exposición. Con 600 mg marcados, por la orina salió un 1,2 % como abacavir, un 30 % como ácido carboxílico y un 36 % como glucurónido; las heces, el 16 %. Su semivida es de 1,54 horas.'
  },
  recorrido: {
    liberacion: {
      organos: [ 'boca' ],
      organosGenerales: [ 'esofago', 'estomago' ],
      llega: 'Solución oral tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Solución oral: el abacavir ya va disuelto.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Solución oral: el abacavir ya va disuelto.',
          ref: {
            f: 'dailymed-abacavir',
            sec: '3 · Formas y concentraciones',
            cita: 'ZIAGEN oral solution contains 20 mg per mL of abacavir',
            codigo: '43678-2'
          }
        },
        RENG_GENERAL.disgregar
      ]
    },
    absorcion: {
      organos: [],
      organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
      llega: 'Llega el principio activo liberado.',
      ocurre: 'Se absorbe rápido y se reparte ampliamente; la biodisponibilidad absoluta del comprimido es del 83 %. La comida no cambia la exposición.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe rápido y se reparte ampliamente; la biodisponibilidad absoluta del comprimido es del 83 %. La comida no cambia la exposición.',
          ref: {
            f: 'dailymed-abacavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Following oral administration, abacavir is rapidly absorbed and extensively distributed',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'tejidos' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'Volumen aparente de 0,86 L/kg, que indica paso fuera de los vasos; se une a proteínas en un 50 % y entra en los glóbulos rojos.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'Volumen aparente de 0,86 L/kg, que indica paso fuera de los vasos; se une a proteínas en un 50 % y entra en los glóbulos rojos.',
          ref: {
            f: 'dailymed-abacavir',
            sec: '12.3 · Farmacocinética',
            cita: 'Binding of abacavir to human plasma proteins is approximately 50%',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Transcriptasa inversa del VIH-1',
        efecto: 'Es un análogo de nucleósido: las enzimas de la célula lo convierten en trifosfato de carbovir, que inhibe la transcriptasa inversa del VIH-1 compitiendo con el sustrato natural e incorporándose al ADN viral.',
        lugar: [ 'sitio-infeccion', 'sistema-inmunitario' ],
        datos: [
          {
            t: 'Es un análogo de nucleósido: las enzimas de la célula lo convierten en trifosfato de carbovir, que inhibe la transcriptasa inversa del VIH-1 compitiendo con el sustrato natural e incorporándose al ADN viral.',
            ref: {
              f: 'dailymed-abacavir',
              sec: '12 · Farmacología clínica',
              cita: 'CBV-TP inhibits the activity of HIV-1 reverse transcriptase (RT) both by competing with the natural substrate dGTP and by its incorporation into viral DNA',
              codigo: '34090-1'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: "No lo metabolizan las enzimas CYP: la alcohol deshidrogenasa forma el ácido 5'-carboxílico y la glucuroniltransferasa, el 5'-glucurónido; ninguno es antiviral.",
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: "No lo metabolizan las enzimas CYP: la alcohol deshidrogenasa forma el ácido 5'-carboxílico y la glucuroniltransferasa, el 5'-glucurónido; ninguno es antiviral.",
          ref: {
            f: 'dailymed-abacavir',
            sec: '12.3 · Farmacocinética',
            cita: 'The primary routes of elimination of abacavir are metabolism by alcohol dehydrogenase to form the 5′-carboxylic acid and glucuronyl transferase to form the 5′-glucuronide',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'Trifosfato de carbovir (CBV-TP)',
          actividad: 'activo',
          nota: 'Metabolito activo que se forma dentro de las células.',
          ref: {
            f: 'dailymed-abacavir',
            sec: '12 · Farmacología clínica',
            cita: 'Abacavir is converted by cellular enzymes to the active metabolite, carbovir triphosphate (CBV-TP)',
            codigo: '34090-1'
          }
        },
        {
          nombre: "Ácido 5'-carboxílico",
          actividad: 'inactivo',
          ref: { f: 'dailymed-abacavir', sec: '12.3 · Farmacocinética', cita: 'The metabolites do not have antiviral activity', codigo: '43682-4' }
        },
        {
          nombre: "5'-glucurónido",
          actividad: 'inactivo',
          ref: {
            f: 'dailymed-abacavir',
            sec: '12.3 · Farmacocinética',
            cita: '30% as the 5′-carboxylic acid metabolite, 36% as the 5′-glucuronide metabolite',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Con 600 mg marcados, por la orina salió un 1,2 % como abacavir, un 30 % como ácido carboxílico y un 36 % como glucurónido; las heces, el 16 %. Su semivida es de 1,54 horas.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Con 600 mg marcados, por la orina salió un 1,2 % como abacavir, un 30 % como ácido carboxílico y un 36 % como glucurónido; las heces, el 16 %. Su semivida es de 1,54 horas.',
          ref: { f: 'dailymed-abacavir', sec: '12.3 · Farmacocinética', cita: '1.2% was excreted in the urine as abacavir', codigo: '43682-4' }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'biodisponibilidad',
      nombre: 'Biodisponibilidad absoluta del comprimido',
      valor: '83',
      unidad: '%',
      analito: 'abacavir',
      condiciones: 'comprimido',
      origen: 'otra-presentacion',
      ref: {
        f: 'dailymed-abacavir',
        sec: '12.3 · Farmacocinética',
        cita: 'The geometric mean absolute bioavailability of the tablet was 83%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'cmax',
      nombre: 'Concentración máxima',
      valor: '4,26 (± 1,19)',
      unidad: 'mcg/mL',
      analito: 'abacavir',
      poblacion: '20 personas',
      condiciones: 'dosis única de 600 mg',
      ref: { f: 'dailymed-abacavir', sec: '12.3 · Farmacocinética', cita: 'C max was 4.26 ± 1.19 mcg per mL', codigo: '43682-4' }
    },
    {
      magnitud: 'semivida',
      nombre: 'Semivida de eliminación',
      valor: '1,54 (± 0,63)',
      unidad: 'h',
      analito: 'abacavir',
      condiciones: 'dosis única',
      ref: {
        f: 'dailymed-abacavir',
        sec: '12.3 · Farmacocinética',
        cita: 'the observed elimination half-life (t ½ ) was 1.54 ± 0.63 hours',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '50 (aprox.)',
      unidad: '%',
      analito: 'abacavir',
      ref: {
        f: 'dailymed-abacavir',
        sec: '12.3 · Farmacocinética',
        cita: 'Binding of abacavir to human plasma proteins is approximately 50%',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'vd',
      nombre: 'Volumen aparente de distribución',
      valor: '0,86 (± 0,15)',
      unidad: 'L/kg',
      analito: 'abacavir',
      condiciones: 'tras la vía intravenosa',
      origen: 'otra-via',
      ref: {
        f: 'dailymed-abacavir',
        sec: '12.3 · Farmacocinética',
        cita: 'The apparent volume of distribution after IV administration of abacavir was 0.86 ± 0.15 L per kg',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-abacavir', 'ca73b519-015a-436d-aa3c-af53492825a1', 'ZIAGEN (ABACAVIR SULFATE) SOLUTION', 'ZIAGEN', '33', '2026-06-10', '2026-11-12'),
    rengPubchem(441300, 'abacavir', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
