function AboutPage() {
  return (
    <>
      <section id="about" className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">About Us</h2>

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Our Mission</h3>
        <p className="mt-3 leading-7 text-slate-700 dark:text-slate-400">
          We build dependable software that gives growing companies the same technical foundation, security
          posture, and operational visibility usually reserved for much larger organizations.
        </p>
        <br />

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">What We Build</h3>
        <p className="mt-3 leading-7 text-slate-700 dark:text-slate-400">
          Our work includes SaaS applications, customer portals, analytics dashboards, admin systems, secure
          integrations, workflow automation, and cloud-native backends built for high uptime and long-term
          growth.
        </p>
        <br />

        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">How We Work</h3>
        <p className="mt-3 leading-7 text-slate-700 dark:text-slate-400">
          We keep delivery transparent and practical: discovery first, architecture early, small milestones,
          regular demos, clear documentation, and security built into every stage of development.
        </p>
        <br />
      </section>

      <section className="mx-auto mt-12 max-w-4xl">
        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Our Approach</h3>
        <p className="mt-3 leading-8 text-slate-700 dark:text-slate-400">
          Londonsoft combines cloud-native architecture, modern backend development, testing discipline, and
          strict security practices to ship production-ready systems with confidence. We favor simple,
          maintainable designs over unnecessary complexity, which helps clients reduce operational risk and
          scale more efficiently over time.
        </p>
        <br />

        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Engineering Principles</h4>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-400">
          <li>Secure-by-default application design</li>
          <li>Observable systems with logs, metrics, and alerting</li>
          <li>Automated testing and repeatable deployments</li>
          <li>Clear APIs and maintainable service boundaries</li>
        </ul>
        <br />

        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Client Experience</h4>
        <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-400">
          <li>Structured discovery and technical planning</li>
          <li>Weekly progress updates and working demos</li>
          <li>Documentation for handoff and future growth</li>
          <li>Post-launch support and optimization</li>
        </ul>
        <br />
      </section>

      <section className="mx-auto mt-14 max-w-4xl">
        <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">Why Clients Work With Us</h3>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-400">
          We help clients build systems that are secure, scalable, and maintainable from day one, which
          reduces risk and supports growth without constant rewrites. Our practical, transparent approach to
          delivery gives clients confidence and clarity throughout the process.
        </p>
        <br />
        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Security-First Delivery</h4>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-400">
          Access control, encryption, auditability, and infrastructure hygiene are treated as core product
          requirements, not late-stage add-ons.
        </p>
        <br />

        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Built to Scale</h4>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-400">
          We design systems that can support growth in users, data, traffic, and operational complexity
          without constant rewrites.
        </p>
        <br />

        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Practical Collaboration</h4>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-400">
          Clients get direct communication, realistic estimates, and technical decisions explained in plain
          language.
        </p>
        <br />

        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Long-Term Maintainability</h4>
        <p className="mt-2 leading-7 text-slate-700 dark:text-slate-400">
          We prioritize readable code, documented systems, and infrastructure patterns that future teams can
          confidently maintain.
        </p>
        <br />
      </section>

    </>
  );
}

export default AboutPage;
