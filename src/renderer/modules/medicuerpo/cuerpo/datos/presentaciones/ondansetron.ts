import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengFichaCIMA, type RengExtensionFicha } from '../modelo'

export default {
  activoId: 'ondansetron',
  presentaciones: [
    {
  id: 'ondansetron-solucion',
  producto: 'Ondansetron Hydrochloride · solución oral',
  titular: 'HIKMA PHARMACEUTICALS USA INC.',
  mercado: 'EE. UU.',
  forma: 'Solución oral',
  formaFuente: 'SOLUTION',
  liberacion: 'no declarada',
  concentraciones: '4 mg/5 mL de ondansetrón (como clorhidrato), según la etiqueta',
  sal: {
    nombre: 'Clorhidrato de ondansetrón',
    ref: { f: 'dailymed-ondansetron-solucion', sec: '11 · Descripción', cita: 'ondansetron hydrochloride', codigo: '34089-3' }
  },
  excipientes: [ 'anhydrous citric acid', 'glycerin', 'saccharin sodium anhydrous', 'sodium benzoate', 'water', 'sodium citrate, unspecified form' ],
  usos: {
    t: 'Prevención de las náuseas y los vómitos asociados a la quimioterapia contra el cáncer, a la radioterapia y a la cirugía, según las condiciones que enumera la etiqueta.',
    ref: {
      f: 'dailymed-ondansetron-solucion',
      sec: '1 · Indicaciones',
      cita: 'Ondansetron is indicated for the prevention of nausea and vomiting associated with',
      codigo: '34067-9'
    }
  },
  fuente: 'dailymed-ondansetron-solucion',
  advertencias: [
    {
      titulo: 'Hipersensibilidad',
      texto: 'Se han descrito reacciones de hipersensibilidad, incluidas anafilaxia y broncoespasmo, en pacientes sensibles a otros antagonistas 5-HT3.',
      organos: [ 'vias-respiratorias' ],
      ref: {
        f: 'dailymed-ondansetron-solucion',
        sec: '5 · Advertencias y precauciones',
        cita: 'Hypersensitivity reactions, including anaphylaxis and bronchospasm, have been reported in patients who have exhibited hypersensitivity to other selective 5-HT 3 receptor antagonists',
        codigo: '43685-7'
      }
    },
    {
      titulo: 'Prolongación del QT',
      texto: 'Se han visto cambios en el electrocardiograma, entre ellos prolongación del intervalo QT, y casos de torsade de pointes.',
      organos: [ 'corazon' ],
      ref: {
        f: 'dailymed-ondansetron-solucion',
        sec: '5 · Advertencias y precauciones',
        cita: 'Electrocardiogram (ECG) changes, including QT interval prolongation have been seen in patients receiving ondansetron',
        codigo: '43685-7'
      }
    }
  ],
  reacciones: [
    [
      'Las más frecuentes en adultos en la prevención con quimioterapia (≥ 5 %): dolor de cabeza, malestar y fatiga, estreñimiento y diarrea.',
      '34084-4',
      'The most common adverse reactions in adults for the: • prevention of chemotherapy-induced (≥ 5%) are: headache, malaise/fatigue, constipation, diarrhea'
    ],
    [
      'La etiqueta describe además hipersensibilidad, prolongación del QT, síndrome serotoninérgico e isquemia miocárdica.',
      '34084-4',
      'The following clinically significant adverse reactions are described elsewhere in the labeling'
    ]
  ],
  familia: 'liquido-oral',
  vias: [ 'oral' ],
  formaNormalizada: 'solucion-oral',
  recorridoPropio: {
    resumen: 'Se absorbe en el tubo digestivo y sufre algo de metabolismo de primer paso; la biodisponibilidad media con un comprimido de 8 mg es de alrededor del 56 %. Alrededor del 5 % de una dosis marcada se recupera como fármaco original en la orina; los metabolitos se observan en la orina.',
    etapas: {
      liberacion: {
        organos: [ 'boca', 'esofago', 'estomago' ],
        organosGenerales: [],
        llega: 'El líquido tragado baja por el esófago hasta el estómago.',
        ocurre: 'Solución oral: líquido incoloro y transparente; el principio activo ya está disuelto.',
        sigue: 'El principio activo, ya disuelto o en suspensión, queda disponible para absorberse.',
        datos: [
          {
            t: 'Solución oral: líquido incoloro y transparente; el principio activo ya está disuelto.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '3 · Formas y concentraciones',
              cita: 'Ondansetron Oral Solution, USP 4 mg/5 mL, is a clear, colorless solution available in a 50 mL bottle',
              codigo: '43678-2'
            }
          }
        ]
      },
      absorcion: {
        organos: [],
        organosGenerales: [ 'intestino-delgado', 'vena-porta' ],
        llega: 'Llega el principio activo liberado.',
        ocurre: 'Se absorbe en el tubo digestivo y sufre algo de metabolismo de primer paso; la biodisponibilidad media con un comprimido de 8 mg es de alrededor del 56 %.',
        sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
        datos: [
          {
            t: 'Se absorbe en el tubo digestivo y sufre algo de metabolismo de primer paso; la biodisponibilidad media con un comprimido de 8 mg es de alrededor del 56 %.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Ondansetron is absorbed from the gastrointestinal tract and undergoes some first-pass metabolism',
              codigo: '43682-4'
            }
          },
          {
            t: 'La biodisponibilidad media de un comprimido de 8 mg es de alrededor del 56 %.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Mean bioavailability in healthy subjects, following administration of a single 8-mg tablet, is approximately 56%',
              codigo: '43682-4'
            },
            poblacion: 'sujetos sanos',
            condiciones: 'comprimido de 8 mg'
          },
          {
            t: 'La comida aumenta ligeramente la biodisponibilidad.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Bioavailability is also slightly enhanced by the presence of food',
              codigo: '43682-4'
            }
          },
          RENG_GENERAL.intestino,
          RENG_GENERAL.portal
        ]
      },
      distribucion: {
        organos: [ 'sangre' ],
        llega: 'Llega a la circulación general la fracción absorbida.',
        ocurre: 'La unión a proteínas del plasma in vitro fue del 70 % al 76 % entre 10 y 500 ng/mL; el fármaco circulante también se distribuye en los eritrocitos.',
        sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
        datos: [
          {
            t: 'La unión a proteínas del plasma in vitro fue del 70 % al 76 % entre 10 y 500 ng/mL; el fármaco circulante también se distribuye en los eritrocitos.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Plasma protein binding of ondansetron as measured in vitro was 70% to 76% over the concentration range of 10 to 500 ng/mL',
              codigo: '43682-4'
            }
          },
          {
            t: 'El fármaco circulante también se distribuye en los eritrocitos.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Circulating drug also distributes into erythrocytes',
              codigo: '43682-4'
            }
          }
        ],
        accion: {
          diana: 'Receptor 5-HT3 de serotonina',
          efecto: 'Es un antagonista selectivo de los receptores 5-HT3; no es un antagonista de la dopamina. Su mecanismo no está del todo caracterizado.',
          lugar: [ 'encefalo', 'intestino-delgado' ],
          datos: [
            {
              t: 'Es un antagonista selectivo de los receptores 5-HT3; no es un antagonista de la dopamina. Su mecanismo no está del todo caracterizado.',
              ref: {
                f: 'dailymed-ondansetron-solucion',
                sec: '12.1 · Mecanismo de acción',
                cita: 'Ondansetron is a selective 5-HT 3 receptor antagonist',
                codigo: '43679-0'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza de forma extensa; la vía principal es la hidroxilación del anillo de indol seguida de conjugación con glucurónido o sulfato, con participación de CYP1A2, CYP2D6 y CYP3A4.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza de forma extensa; la vía principal es la hidroxilación del anillo de indol seguida de conjugación con glucurónido o sulfato, con participación de CYP1A2, CYP2D6 y CYP3A4.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Ondansetron is extensively metabolized in humans, with approximately 5% of a radiolabeled dose recovered as the parent compound from the urine',
              codigo: '43682-4'
            }
          },
          {
            t: 'La vía metabólica principal es la hidroxilación del anillo de indol seguida de conjugación con glucurónido o sulfato.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'The primary metabolic pathway is hydroxylation on the indole ring followed by subsequent glucuronide or sulfate conjugation',
              codigo: '43682-4'
            }
          },
          {
            t: 'Es sustrato de enzimas hepáticas del citocromo P-450, entre ellas CYP1A2, CYP2D6 y CYP3A4.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'ondansetron is a substrate for human hepatic cytochrome P-450 enzymes, including CYP1A2, CYP2D6, and CYP3A4',
              codigo: '43682-4'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos no conjugados',
            actividad: 'activo',
            nota: 'Algunos tienen actividad farmacológica, pero no alcanzan en el plasma concentraciones que contribuyan de forma importante al efecto.',
            ref: {
              f: 'dailymed-ondansetron-solucion',
              sec: '12.3 · Farmacocinética',
              cita: 'Although some nonconjugated metabolites have pharmacologic activity, these are not found in plasma at concentrations likely to significantly contribute to the biological activity of ondansetron',
              codigo: '43682-4'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Alrededor del 5 % de una dosis marcada se recupera como fármaco original en la orina; los metabolitos se observan en la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Alrededor del 5 % de una dosis marcada se recupera como fármaco original en la orina; los metabolitos se observan en la orina.',
            ref: { f: 'dailymed-ondansetron-solucion', sec: '12.3 · Farmacocinética', cita: 'The metabolites are observed in the urine', codigo: '43682-4' }
          }
        ]
      }
    }
  }
},
    {
  id: 'ondansetron-cima-inyectable',
  producto: 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG',
  titular: 'Accord Healthcare S.L.U.',
  mercado: 'España (UE)',
  forma: 'Solución inyectable',
  formaFuente: 'SOLUCIÓN INYECTABLE',
  liberacion: 'no declarada',
  concentraciones: '2 mg/mL de ondansetrón (como hidrocloruro dihidrato), en ampollas de 2 mL y de 4 mL, según la ficha técnica',
  excipientes: [ 'Ácido cítrico monohidrato', 'Citrato sódico', 'Cloruro sódico', 'Hidróxido sódico', 'Ácido clorhídrico', 'Agua para preparaciones inyectables' ],
  usos: {
    t: 'Náuseas y vómitos inducidos por quimioterapia y radioterapia, y prevención y tratamiento de las náuseas y vómitos posoperatorios, en adultos; también en niños desde 1 o 6 meses según la indicación.',
    ref: {
      f: 'cima-72117',
      sec: '4.1 · Indicaciones terapéuticas',
      cita: 'Tratamiento de náuseas y vómitos inducidos por quimioterapia citotóxica y radioterapia',
      codigo: 'FT 4.1'
    }
  },
  fuente: 'cima-72117',
  advertencias: [
    {
      titulo: 'Hipersensibilidad cruzada',
      texto: 'Se han descrito reacciones de hipersensibilidad en pacientes con hipersensibilidad a otros antagonistas selectivos de los receptores 5HT3.',
      organos: [ 'sistema-inmunitario' ],
      ref: {
        f: 'cima-72117',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'Se han descrito reacciones de hipersensibilidad en pacientes que han presentado hipersensibilidad a otros antagonistas selectivos de los receptores 5HT 3',
        codigo: 'FT 4.4'
      }
    },
    {
      titulo: 'Función hepática alterada',
      texto: 'Se metaboliza en gran medida en el hígado; con la función hepática alterada, el aclaramiento hepático disminuye y la vida media aumenta.',
      organos: [ 'higado' ],
      ref: {
        f: 'cima-72117',
        sec: '4.4 · Advertencias y precauciones especiales de empleo',
        cita: 'El aclaramiento hepático disminuye y la vida media aumenta en pacientes con función hepática alterada',
        codigo: 'FT 4.4'
      }
    }
  ],
  reacciones: [
    [
      'Muy frecuente: cefalea; frecuentes: sensación de calor o sofocos, estreñimiento y reacciones locales en el lugar de la inyección intravenosa.',
      'FT 4.8',
      'Reacciones locales en el lugar de inyección intravenosa'
    ],
    [
      'Raras: reacciones de hipersensibilidad inmediata, a veces intensas, incluida la anafilaxia.',
      'FT 4.8',
      'Reacciones de hipersensibilidad inmediata, a veces intensas, incluida la anafilaxia'
    ]
  ],
  familia: 'inyectable',
  vias: [ 'intravenosa' ],
  formaNormalizada: 'solucion-inyectable',
  recorridoPropio: {
    resumen: 'Entra directamente en la circulación general. Los metabolitos se excretan por las heces y la orina; menos del 5 % de ondansetrón se excreta sin cambios en la orina.',
    etapas: {
      liberacion: {
        organos: [ 'sangre' ],
        llega: 'La solución llega a la sangre por una vena.',
        ocurre: 'Solución inyectable y para perfusión, transparente e incolora: el fármaco ya está disuelto y se administra en una vena.',
        sigue: 'El fármaco, ya disuelto, circula con la sangre.',
        datos: [
          {
            t: 'Solución inyectable y para perfusión, transparente e incolora: el fármaco ya está disuelto y se administra en una vena.',
            ref: { f: 'cima-72117', sec: '3 · Forma farmacéutica', cita: 'Solución transparente e incolora', codigo: 'FT 3' }
          }
        ]
      },
      absorcion: {
        organos: [ 'sangre' ],
        llega: 'El fármaco ya está en la sangre.',
        ocurre: 'Entra directamente en la circulación general.',
        sigue: 'Sigue hacia los tejidos y el hígado.',
        datos: [],
        noAplica: {
          motivo: 'En la vía intravenosa el fármaco entra directamente en la sangre; la ficha no da datos de absorción propios de las vías inyectables y solo indica que tras la administración intravenosa se obtiene una exposición sistémica comparable a la oral.',
          ref: {
            f: 'cima-72117',
            sec: '5.2 · Propiedades farmacocinéticas',
            cita: 'Tras la administración i.v. de ondansetrón, se obtiene una exposición sistémica comparable',
            codigo: 'FT 5.2'
          }
        }
      },
      distribucion: {
        organos: [ 'sangre', 'tejidos' ],
        llega: 'El fármaco circula en la sangre unido a proteínas.',
        ocurre: 'La unión a las proteínas plasmáticas es del 70 al 76 % y el volumen de distribución teórico es de 2,5 l/kg.',
        sigue: 'Se reparte por los tejidos y llega al hígado.',
        datos: [
          {
            t: 'La unión a las proteínas plasmáticas es del 70 al 76 % y el volumen de distribución teórico es de 2,5 l/kg.',
            ref: {
              f: 'cima-72117',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La unión a las proteínas plasmáticas es del 70 al 76%',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'El volumen de distribución teórico es de 2,5 l/kg.',
            ref: { f: 'cima-72117', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución teórico es de 2,5 l/kg', codigo: 'FT 5.2' }
          }
        ],
        accion: {
          diana: 'Receptor 5HT3',
          efecto: 'Es un antagonista potente y muy selectivo del receptor 5HT3; se desconoce su mecanismo de acción en el control de las náuseas y los vómitos.',
          lugar: [ 'encefalo', 'intestino-delgado' ],
          datos: [
            {
              t: 'Es un antagonista potente y muy selectivo del receptor 5HT3; se desconoce su mecanismo de acción en el control de las náuseas y los vómitos.',
              ref: {
                f: 'cima-72117',
                sec: '5.1 · Propiedades farmacodinámicas',
                cita: 'Ondansetrón es un antagonista potente y altamente selectivo del receptor 5HT 3',
                codigo: 'FT 5.1'
              }
            }
          ]
        }
      },
      metabolismo: {
        organos: [ 'higado' ],
        llega: 'El fármaco llega a los lugares donde se transforma.',
        ocurre: 'Se metaboliza principalmente en el hígado por varias enzimas del citocromo P450: CYP3A4, CYP1A2 y CYP2D6.',
        sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
        datos: [
          {
            t: 'Se metaboliza principalmente en el hígado por varias enzimas del citocromo P450: CYP3A4, CYP1A2 y CYP2D6.',
            ref: {
              f: 'cima-72117',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Ondansetrón se metaboliza principalmente en el hígado por varias enzimas del citocromo P450',
              codigo: 'FT 5.2'
            }
          }
        ],
        metabolitos: [
          {
            nombre: 'Metabolitos de ondansetrón',
            actividad: 'desconocida',
            nota: 'La ficha no indica cuáles son ni su actividad.',
            ref: {
              f: 'cima-72117',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Los metabolitos se excretan en las heces y en la orina',
              codigo: 'FT 5.2'
            }
          }
        ]
      },
      excrecion: {
        organos: [ 'rinones', 'orina', 'heces' ],
        llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
        ocurre: 'Los metabolitos se excretan por las heces y la orina; menos del 5 % de ondansetrón se excreta sin cambios en la orina.',
        sigue: 'Fin del recorrido.',
        datos: [
          {
            t: 'Los metabolitos se excretan por las heces y la orina; menos del 5 % de ondansetrón se excreta sin cambios en la orina.',
            ref: {
              f: 'cima-72117',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'Menos del 5% de ondansetrón se excreta sin cambios en la orina',
              codigo: 'FT 5.2'
            }
          },
          {
            t: 'La semivida terminal tras la administración oral o intravenosa es aproximadamente la misma, de unas 3 horas.',
            ref: {
              f: 'cima-72117',
              sec: '5.2 · Propiedades farmacocinéticas',
              cita: 'La semivida terminal del ondansetrón tras la administración oral o i.v. es aproximadamente la misma y es de unas 3 horas',
              codigo: 'FT 5.2'
            }
          }
        ]
      }
    }
  }
}
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-ondansetron-solucion', '1a0c4dc6-643e-4ee7-92a9-edb98049a5ba', 'ONDANSETRON HYDROCHLORIDE SOLUTION', 'Ondansetron Hydrochloride', '15', '2025-07-21', '2026-11-15'),
    rengFichaCIMA('cima-72117', '72117', 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG (Accord Healthcare S.L.U.)', '2025-02-06', '2026-11-15')
  ],
  cifras: [
  {
    magnitud: 'biodisponibilidad',
    nombre: 'Biodisponibilidad media del comprimido de 8 mg',
    valor: '56 (aprox.)',
    unidad: '%',
    analito: 'ondansetrón',
    poblacion: 'sujetos sanos',
    origen: 'otra-presentacion',
    ref: {
      f: 'dailymed-ondansetron-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Mean bioavailability in healthy subjects, following administration of a single 8-mg tablet, is approximately 56%',
      codigo: '43682-4'
    },
    presentacion: 'Ondansetron Hydrochloride · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas del plasma in vitro',
    valor: '70-76',
    unidad: '%',
    analito: 'ondansetrón',
    ref: {
      f: 'dailymed-ondansetron-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'Plasma protein binding of ondansetron as measured in vitro was 70% to 76% over the concentration range of 10 to 500 ng/mL',
      codigo: '43682-4'
    },
    presentacion: 'Ondansetron Hydrochloride · solución oral'
  },
  {
    magnitud: 'orina',
    nombre: 'Fármaco original recuperado en la orina',
    valor: '5 (aprox.)',
    unidad: '% de la dosis',
    analito: 'ondansetrón',
    ref: {
      f: 'dailymed-ondansetron-solucion',
      sec: '12.3 · Farmacocinética',
      cita: 'approximately 5% of a radiolabeled dose recovered as the parent compound from the urine',
      codigo: '43682-4'
    },
    presentacion: 'Ondansetron Hydrochloride · solución oral'
  },
  {
    magnitud: 'union',
    nombre: 'Unión a proteínas plasmáticas',
    valor: '70-76',
    unidad: '%',
    analito: 'ondansetrón',
    ref: { f: 'cima-72117', sec: '5.2 · Propiedades farmacocinéticas', cita: 'La unión a las proteínas plasmáticas es del 70 al 76%', codigo: 'FT 5.2' },
    presentacion: 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG'
  },
  {
    magnitud: 'vd',
    nombre: 'Volumen de distribución teórico',
    valor: '2,5',
    unidad: 'L/kg',
    analito: 'ondansetrón',
    ref: { f: 'cima-72117', sec: '5.2 · Propiedades farmacocinéticas', cita: 'El volumen de distribución teórico es de 2,5 l/kg', codigo: 'FT 5.2' },
    presentacion: 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG'
  },
  {
    magnitud: 'semivida',
    nombre: 'Semivida terminal',
    valor: '3 (aprox.)',
    unidad: 'h',
    analito: 'ondansetrón',
    ref: {
      f: 'cima-72117',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'La semivida terminal del ondansetrón tras la administración oral o i.v. es aproximadamente la misma y es de unas 3 horas',
      codigo: 'FT 5.2'
    },
    presentacion: 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG'
  },
  {
    magnitud: 'orina',
    nombre: 'Excretado sin cambios por la orina',
    valor: '< 5',
    unidad: '% de la dosis',
    analito: 'ondansetrón',
    ref: {
      f: 'cima-72117',
      sec: '5.2 · Propiedades farmacocinéticas',
      cita: 'Menos del 5% de ondansetrón se excreta sin cambios en la orina',
      codigo: 'FT 5.2'
    },
    presentacion: 'ONDANSETRON ACCORD 2 mg/ml SOLUCION INYECTABLE EFG'
  }
]
} satisfies RengExtensionFicha
