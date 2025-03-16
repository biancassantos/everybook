function Welcome() {
  return (
    <section className="bg-[url('/imgs/bg-mobile.jpg')] bg-bottom bg-cover text-center min-h-[85vh] w-full py-12 px-4 xs:bg-[url('/imgs/bg-desktop.jpg')] sm:px-6 md:min-h-full md:w-[60%] md:text-start md:px-10">
      <h1 className="font-playfair text-[42px] text-primary mb-3 xs:text-6xl md:text-7xl md:mb-2 lg:text-8xl">
        EveryBook
      </h1>
      <p className="text-primary text-lg xs:text-xl">
        Join us and create your own virtual bookshelf!
      </p>
    </section>
  )
}

export default Welcome;