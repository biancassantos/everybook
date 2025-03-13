type BookListLayoutProps = {
  children: React.ReactNode
}

function BookListLayout({ children }: BookListLayoutProps) {
  return (
    <section className="bg-latte rounded-lg py-10 px-8">
      <ul className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        {children}
      </ul>
    </section>
  )
}

export default BookListLayout;