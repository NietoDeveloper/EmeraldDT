import { HeroSection } from '@/components/sections/HeroSection';
import { MainButton } from '@/components/ui/MainButton';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

/**
 * Emerald DT - Home Orchestrator
 * Ajustado para Responsive 310px - 1900px+
 * Sin etiquetas <main> duplicadas para erradicar el doble scroll.
 */
export default async function Home({ params }: HomePageProps) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';
  const isEs = lang === 'es';


        {/* Decoración lateral técnica */}
        <div className="absolute right-8 md:right-16 bottom-24 hidden xl:block">
          <div className="flex flex-col gap-6 items-center">
            <span className="[writing-mode:vertical-lr] uppercase tracking-[0.5em] text-[10px] text-zinc-700 font-mono">
              Nieto Laboratory — 2026
            </span>
            <div className="w-[1px] h-20 bg-gradient-to-t from-emerald/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Security & Trust */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center bg-black py-32 border-t border-white/5">
        <div className="w-full px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48">
            <div className="max-w-4xl">
                <h4 className="text-emerald text-xl md:text-3xl font-black uppercase tracking-widest mb-8">Maximum Security Architecture</h4>
                <p className="text-zinc-500 text-base md:text-xl leading-relaxed mb-10">
                    Absolute traceability for every high-value asset. Our double cluster infrastructure ensures your investment is backed by the highest standards of digital and physical security.
                </p>
                <div className="w-16 h-[1px] bg-emerald/50" />
            </div>
        </div>
      </section>
    </div>
  );
}