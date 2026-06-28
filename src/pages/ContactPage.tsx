function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Contact Us</h2>
      <p className="mt-3 leading-8 text-slate-700 dark:text-slate-400">
        Whether you are planning a new SaaS product, modernizing an internal platform, or improving security
        and performance in an existing system, Londonsoft can help you move from concept to stable production
        with a clear technical plan.
      </p>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-400">
        Email:{' '}
        <a href="mailto:blake.lmj@gmail.com" className="font-medium text-blue-700 underline underline-offset-4 dark:text-blue-300">
          blake.lmj@londonsoft.ca
        </a>
      </p>
    </section>
  );
}

export default ContactPage;
