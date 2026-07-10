import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section, SectionHeading } from '@/components/ui/Section';
import { MacrosCalculator } from '@/components/calculator/MacrosCalculator';
import { JsonLd } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Calculadora de macros gratis',
  description:
    'Calcula gratis tus calorías diarias y tu reparto de proteína, carbohidratos y grasa con la fórmula Mifflin-St Jeor. Sin registro. Herramienta creada por nutrióloga en CDMX.',
  alternates: { canonical: '/calculadora-de-macros' },
  openGraph: {
    title: `Calculadora de macros gratis · ${site.name}`,
    description:
      'Estima tus calorías y macronutrientes según tu objetivo. Sin registro, resultado inmediato.',
    url: `${site.url}/calculadora-de-macros`,
  },
};

const faqs = [
  {
    q: '¿Qué son los macronutrientes?',
    a: 'Son los tres nutrientes que aportan energía: proteínas, carbohidratos y grasas. El equilibrio entre ellos influye en tu composición corporal, energía y saciedad.',
  },
  {
    q: '¿Qué fórmula utiliza la calculadora?',
    a: 'Usamos la ecuación Mifflin-St Jeor para estimar tu metabolismo basal, la multiplicamos por tu nivel de actividad y ajustamos las calorías según tu objetivo.',
  },
  {
    q: '¿Este resultado es un plan de alimentación?',
    a: 'No. Es un punto de partida orientativo. Un plan real considera tu historia clínica, análisis, preferencias y estilo de vida — eso lo diseñamos en consulta.',
  },
  {
    q: '¿Necesito registrarme para usarla?',
    a: 'No. La herramienta es totalmente gratuita y no requiere registro ni dejar tus datos.',
  },
];

const howTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo calcular tus macros',
  description:
    'Estima tus calorías y macronutrientes diarios con la fórmula Mifflin-St Jeor.',
  step: [
    { '@type': 'HowToStep', name: 'Ingresa tus datos', text: 'Sexo, edad, peso y altura.' },
    { '@type': 'HowToStep', name: 'Elige tu nivel de actividad', text: 'De sedentario a muy activo.' },
    { '@type': 'HowToStep', name: 'Selecciona tu objetivo', text: 'Bajar de peso, mantenerte o ganar músculo.' },
    { '@type': 'HowToStep', name: 'Calcula', text: 'Obtén tus calorías y el reparto de macros al instante.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function CalculadoraPage() {
  return (
    <>
      <JsonLd data={howTo} />
      <JsonLd data={faqSchema} />

      {/* Encabezado */}
      <section className="bg-gradient-to-b from-linen to-ivory pt-16 pb-10 md:pt-20">
        <Container className="max-w-3xl text-center">
          <span className="eyebrow justify-center">Herramienta gratuita</span>
          <h1 className="mt-5 text-h1 text-espresso">
            Calculadora de macros
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-taupe">
            Descubre en segundos una estimación de tus calorías diarias y tu
            reparto ideal de proteína, carbohidratos y grasa según tu objetivo.
            Sin registro, sin complicaciones.
          </p>
          <p className="mx-auto mt-5 max-w-xl rounded-2xl bg-clay/5 px-5 py-3 text-xs leading-relaxed text-taupe">
            Esta calculadora ofrece una estimación general con fines
            informativos y <strong className="text-espresso">no sustituye
            una valoración profesional personalizada</strong>.
          </p>
        </Container>
      </section>

      {/* Calculadora */}
      <Container className="pb-section">
        <MacrosCalculator />
      </Container>

      {/* FAQ */}
      <Section className="bg-linen/50">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que debes saber"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-espresso/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-espresso">
                {faq.q}
                <span className="shrink-0 text-clay transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-taupe">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
