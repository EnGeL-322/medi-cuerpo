import { RENG_GENERAL } from '../generales'
import { rengEtiquetaFDA, rengPubchem, type RengFichaFarmaco } from '../modelo'

export default {
  activo: {
    id: 'sofosbuvir',
    nombre: 'Sofosbuvir',
    clase: 'Antiviral frente a la hepatitis C (inhibidor de NS5B, profármaco)',
    sinonimos: [ 'sofosbuvir', 'Sovaldi' ],
    formula: 'C22H29FN3O9P',
    masaMolar: 529.5,
    smiles: 'C[C@@H](C(=O)OC(C)C)N[P@](=O)(OC[C@@H]1[C@H]([C@@]([C@@H](O1)N2C=CC(=O)NC2=O)(C)F)O)OC3=CC=CC=C3',
    inchikey: 'TTZHDVOVKQGIBA-IQWMDFIBSA-N',
    cid: 45375808,
    iupac: 'propan-2-yl (2S)-2-[[[(2R,3R,4R,5R)-5-(2,4-dioxopyrimidin-1-yl)-4-fluoro-3-hydroxy-4-methyloxolan-2-yl]methoxy-phenoxyphosphoryl]amino]propanoate',
    area: 'Infecciones'
  },
  presentaciones: [
    {
      id: 'sofosbuvir-oral',
      producto: 'Sovaldi · comprimido recubierto con película',
      titular: 'GILEAD SCIENCES, INC.',
      mercado: 'EE. UU.',
      forma: 'Comprimido recubierto con película',
      formaFuente: 'TABLET, FILM COATED',
      liberacion: 'no declarada',
      concentraciones: '400 mg o 200 mg por comprimido, según la etiqueta',
      excipientes: [
        'mannitol',
        'microcrystalline cellulose',
        'croscarmellose sodium',
        'silicon dioxide',
        'magnesium stearate',
        'polyvinyl alcohol, unspecified',
        'titanium dioxide',
        'polyethylene glycol, unspecified',
        'talc',
        'ferric oxide yellow',
        'water'
      ],
      usos: {
        t: 'Hepatitis C crónica de genotipos 1 a 4 en adultos, dentro de un tratamiento combinado, y de genotipos 2 y 3 en niños desde 3 años.',
        ref: {
          f: 'dailymed-sofosbuvir',
          sec: '1 · Indicaciones',
          cita: 'Adult patients with genotype 1, 2, 3 or 4 chronic HCV infection',
          codigo: '34067-9'
        }
      },
      fuente: 'dailymed-sofosbuvir',
      advertencias: [
        {
          titulo: 'Reactivación de la hepatitis B',
          texto: 'Se ha descrito reactivación del virus de la hepatitis B en personas coinfectadas durante o después del tratamiento.',
          organos: [ 'higado' ],
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: 'Advertencia destacada',
            cita: 'HBV reactivation has been reported in HCV/HBV coinfected patients',
            codigo: '34066-1'
          }
        },
        {
          titulo: 'Bradicardia con amiodarona',
          texto: 'Se han descrito bradicardias sintomáticas, a veces con marcapasos, al usarlo junto con amiodarona.',
          organos: [ 'corazon' ],
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '5 · Advertencias y precauciones',
            cita: 'Postmarketing cases of symptomatic bradycardia and cases requiring pacemaker intervention have been reported',
            codigo: '43685-7'
          }
        }
      ],
      reacciones: [
        [
          'Con ribavirina, las más frecuentes (≥ 20 %) fueron cansancio y dolor de cabeza.',
          '34084-4',
          'observed with SOVALDI in combination with ribavirin were fatigue and headache'
        ],
        [
          'Con peginterferón y ribavirina: cansancio, dolor de cabeza, náuseas, insomnio y anemia.',
          '34084-4',
          'were fatigue, headache, nausea, insomnia and anemia'
        ]
      ]
    }
  ],
  resumen: {
    contiene: 'Comprimido recubierto con película: 400 mg o 200 mg por comprimido, según la etiqueta. Los excipientes no son el principio activo.',
    usos: 'Hepatitis C crónica de genotipos 1 a 4 en adultos, dentro de un tratamiento combinado, y de genotipos 2 y 3 en niños desde 3 años.',
    actua: 'Es un profármaco que dentro de la célula se convierte en un trifosfato análogo de la uridina; la polimerasa NS5B del virus de la hepatitis C lo incorpora a su ARN y la cadena se interrumpe.',
    recorrido: 'Se absorbe con un pico a las 0,5-2 horas; su metabolito circulante principal, GS-331007, alcanza el pico a las 2-4 horas. La comida no cambia la exposición de forma importante. Tras 400 mg marcados se recuperó más del 92 %: alrededor del 80 % en la orina (sobre todo GS-331007), el 14 % en las heces y el 2,5 % en el aire espirado.'
  },
  recorrido: {
    liberacion: {
      organos: [],
      organosGenerales: [ 'boca', 'esofago', 'estomago' ],
      llega: 'Comprimido recubierto con película tragado: baja por el esófago hasta el estómago.',
      ocurre: 'Comprimido recubierto con película.',
      sigue: 'El principio activo, ya liberado y disuelto, queda disponible para absorberse.',
      datos: [
        {
          t: 'Comprimido recubierto con película.',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '3 · Formas y concentraciones',
            cita: 'yellow, capsule-shaped, film-coated tablet debossed with "GSI"',
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
      ocurre: 'Se absorbe con un pico a las 0,5-2 horas; su metabolito circulante principal, GS-331007, alcanza el pico a las 2-4 horas. La comida no cambia la exposición de forma importante.',
      sigue: 'Lo absorbido pasa a la sangre y, por la vena porta, atraviesa el hígado antes de llegar a la circulación general.',
      datos: [
        {
          t: 'Se absorbe con un pico a las 0,5-2 horas; su metabolito circulante principal, GS-331007, alcanza el pico a las 2-4 horas. La comida no cambia la exposición de forma importante.',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'sofosbuvir was absorbed with a peak plasma concentration observed at ~0.5–2 hour post-dose',
            codigo: '43682-4'
          }
        },
        RENG_GENERAL.intestino,
        RENG_GENERAL.portal
      ]
    },
    distribucion: {
      organos: [ 'sangre', 'higado' ],
      llega: 'Llega a la circulación general la fracción absorbida.',
      ocurre: 'El sofosbuvir se une en un 61-65 % a proteínas del plasma; el GS-331007 apenas se une.',
      sigue: 'La sangre lo lleva a los órganos que lo transforman o lo eliminan.',
      datos: [
        {
          t: 'El sofosbuvir se une en un 61-65 % a proteínas del plasma; el GS-331007 apenas se une.',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'Sofosbuvir is approximately 61–65% bound to human plasma proteins',
            codigo: '43682-4'
          }
        }
      ],
      accion: {
        diana: 'Polimerasa NS5B del virus de la hepatitis C',
        efecto: 'Es un profármaco que dentro de la célula se convierte en un trifosfato análogo de la uridina; la polimerasa NS5B del virus de la hepatitis C lo incorpora a su ARN y la cadena se interrumpe.',
        lugar: [ 'higado', 'sitio-infeccion' ],
        datos: [
          {
            t: 'Es un profármaco que dentro de la célula se convierte en un trifosfato análogo de la uridina; la polimerasa NS5B del virus de la hepatitis C lo incorpora a su ARN y la cadena se interrumpe.',
            ref: {
              f: 'dailymed-sofosbuvir',
              sec: '12.4 · Microbiología',
              cita: 'which can be incorporated into HCV RNA by the NS5B polymerase and acts as a chain terminator',
              codigo: '49489-8'
            }
          }
        ]
      }
    },
    metabolismo: {
      organos: [ 'higado' ],
      llega: 'El fármaco llega a los lugares donde se transforma.',
      ocurre: 'Se metaboliza ampliamente en el hígado hasta el trifosfato activo GS-461203 (por catepsina A o carboxilesterasa 1, HINT1 y fosforilación); al desfosforilarse se forma GS-331007, sin actividad.',
      sigue: 'El fármaco y sus productos de transformación siguen hacia la eliminación.',
      datos: [
        {
          t: 'Se metaboliza ampliamente en el hígado hasta el trifosfato activo GS-461203 (por catepsina A o carboxilesterasa 1, HINT1 y fosforilación); al desfosforilarse se forma GS-331007, sin actividad.',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'Sofosbuvir is extensively metabolized in the liver to form the pharmacologically active nucleoside analog triphosphate GS-461203',
            codigo: '43682-4'
          }
        }
      ],
      metabolitos: [
        {
          nombre: 'GS-461203 (trifosfato)',
          actividad: 'activo',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'to form the pharmacologically active nucleoside analog triphosphate GS-461203',
            codigo: '43682-4'
          }
        },
        {
          nombre: 'GS-331007',
          actividad: 'inactivo',
          nota: 'Metabolito circulante principal (más del 90 % de la exposición).',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'nucleoside metabolite GS-331007 that cannot be efficiently rephosphorylated and lacks anti-HCV activity in vitro',
            codigo: '43682-4'
          }
        }
      ]
    },
    excrecion: {
      organos: [ 'rinones', 'orina', 'heces' ],
      llega: 'Llegan a los órganos de eliminación el fármaco y sus productos de transformación.',
      ocurre: 'Tras 400 mg marcados se recuperó más del 92 %: alrededor del 80 % en la orina (sobre todo GS-331007), el 14 % en las heces y el 2,5 % en el aire espirado.',
      sigue: 'Fin del recorrido.',
      datos: [
        {
          t: 'Tras 400 mg marcados se recuperó más del 92 %: alrededor del 80 % en la orina (sobre todo GS-331007), el 14 % en las heces y el 2,5 % en el aire espirado.',
          ref: {
            f: 'dailymed-sofosbuvir',
            sec: '12.3 · Farmacocinética',
            cita: 'consisting of approximately 80%, 14%, and 2.5% recovered in urine, feces, and expired air, respectively',
            codigo: '43682-4'
          }
        }
      ]
    }
  },
  cifras: [
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '0,5-2',
      unidad: 'h',
      analito: 'sofosbuvir',
      ref: {
        f: 'dailymed-sofosbuvir',
        sec: '12.3 · Farmacocinética',
        cita: 'with a peak plasma concentration observed at ~0.5–2 hour post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'tmax',
      nombre: 'Tiempo hasta el pico',
      valor: '2-4',
      unidad: 'h',
      analito: 'GS-331007 (metabolito inactivo principal)',
      ref: {
        f: 'dailymed-sofosbuvir',
        sec: '12.3 · Farmacocinética',
        cita: 'Peak plasma concentration of GS-331007 was observed between 2 to 4 hours post-dose',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'union',
      nombre: 'Unión a proteínas',
      valor: '61-65',
      unidad: '%',
      analito: 'sofosbuvir',
      ref: {
        f: 'dailymed-sofosbuvir',
        sec: '12.3 · Farmacocinética',
        cita: 'Sofosbuvir is approximately 61–65% bound to human plasma proteins',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'auc',
      nombre: 'AUC 0-24 en estado estacionario',
      valor: '969',
      unidad: 'ng·h/mL',
      analito: 'sofosbuvir',
      poblacion: 'personas con hepatitis C',
      condiciones: 'con ribavirina; análisis poblacional',
      ref: {
        f: 'dailymed-sofosbuvir',
        sec: '12.3 · Farmacocinética',
        cita: 'geometric mean steady state AUC 0–24 was 969 ng∙hr/mL for sofosbuvir',
        codigo: '43682-4'
      }
    },
    {
      magnitud: 'orina',
      nombre: 'Recuperado en la orina',
      valor: '80 (aprox.)',
      unidad: '% de la dosis',
      analito: 'sofosbuvir y metabolitos',
      condiciones: 'dosis única de 400 mg marcada',
      ref: {
        f: 'dailymed-sofosbuvir',
        sec: '12.3 · Farmacocinética',
        cita: 'consisting of approximately 80%, 14%, and 2.5% recovered in urine',
        codigo: '43682-4'
      }
    }
  ],
  fuentes: [
    rengEtiquetaFDA('dailymed-sofosbuvir', '80beab2c-396e-4a37-a4dc-40fdb62859cf', 'SOVALDI (SOFOSBUVIR) TABLET, FILM COATED SOVALDI (SOFOSBUVIR) PELLET', 'Sovaldi', '16', '2025-01-13', '2026-11-12'),
    rengPubchem(45375808, 'sofosbuvir', '2026-11-12')
  ],
  estado: 'completa'
} satisfies RengFichaFarmaco
