function HomePage() {
  return (
    <>
      <section
        id="home"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
            Secure & Scalable
            <span className="text-blue-700 dark:text-blue-300"> Software Solutions</span>
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            Power your business with Enterprise grade solutions.
          </p>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            So you can focus on growth instead of infrastructure.
          </p>
        </article>
        <img className="w-1/2" src="./img/coding.png" alt="Londonsoft Dab" />
      </section>

      <section className="mb-12 p-6 text-xl">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-400">
          Londonsoft is a custom software company that helps businesses modernize operations, launch digital
          products, and scale securely. We design and build web platforms, internal tools, APIs, cloud
          infrastructure, and business automation systems with a strong focus on reliability, maintainability,
          and privacy-first engineering.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-400">
          Our clients typically come to us when spreadsheets are no longer enough, legacy systems are slowing
          growth, or customer-facing platforms need stronger security and better performance. We work closely
          with founders, operations teams, and technical stakeholders to turn business problems into practical
          software that teams actually enjoy using.
        </p>
        <br />
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Our Services
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <img src="./img/tier1.png" alt="Explorer" className="mb-6 w-1/2" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">Startup Tier</h3>
            <div className="mt-2 text-center text-slate-500 dark:text-slate-400 sm:block">
              <p className="text-3xl">$10,000</p>
              <p className="text-2xl">MVP App</p>
              <p className="text-2xl">Core features</p>
              <p className="text-2xl">Cloud Hosting</p>
            </div>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <img src="./img/tier2.png" alt="Adventurer" className="mb-6 w-1/2" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">Business Tier</h3>
            <div className="mt-2 text-center text-slate-500 dark:text-slate-400 sm:block">
              <p className="text-3xl">$50,000</p>
              <p className="text-2xl">Advanced Scaling</p>
              <p className="text-2xl">Internationalization</p>
              <p className="text-2xl">Security</p>
            </div>
          </li>
          <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <img src="./img/tier3.png" alt="Infinity" className="mb-6 w-1/2" />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">Enterprise Tier</h3>
            <div className="mt-2 text-center text-slate-500 dark:text-slate-400 sm:block">
              <p className="text-3xl">Contact Sales</p>
              <p className="text-2xl">Compliance Certified</p>
              <p className="text-2xl">Bank-Grade Encryption</p>
              <p className="text-2xl">24/7 Support</p>
            </div>
          </li>
        </ul>
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section id="testimonials" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Testimonials
        </h2>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-blue-600 py-12 pl-14 pr-8">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] sm:text-3xl">
              Londonsoft's badge swipe tracker transformed our gym operations. Real-time member tracking and
              secure AWS hosting cut no-shows by 30%—members love the seamless check-ins!
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            —Jammie Perry, Owner - Southside Fitness Gym, Wallaceburg
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-blue-600 py-12 pl-14 pr-8">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] sm:text-3xl">
              Our new website is lightning-fast and scales perfectly during peak seasons. Londonsoft delivered
              enterprise-grade security that protects our client designs without any hassle. 💯
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            —Clarice Turner, Manager - Color Printing &amp; Sign, Chatham
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-blue-600 py-12 pl-14 pr-8">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] sm:text-3xl">
              Londonsoft turned our vision into a scalable SaaS platform overnight. Their Python backend handles
              massive traffic spikes while keeping everything encrypted and compliant—true partners in growth.
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            —Dheeraj Gaur, Founder - Web Pulse Creations, Delhi
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default HomePage;
