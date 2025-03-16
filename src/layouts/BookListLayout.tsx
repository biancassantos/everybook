type BookListLayoutProps = {
  children: React.ReactNode
}

function BookListLayout({ children }: BookListLayoutProps) {
  return (
    <section className="bg-latte rounded-lg py-10 px-3 max-w-[1500px] mx-auto xs:px-5 sm:px-8">
      <ul className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        {children}
      </ul>
    </section>
  )
}

export default BookListLayout;