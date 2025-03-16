type BookshelfLayoutProps = {
  children: React.ReactNode
}

function BookshelfLayout({ children }: BookshelfLayoutProps) {
  return (
    <section className="grid grid-cols-2 gap-y-20 max-w-[1250px] mx-auto xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
      {children}
    </section>
  )
}

export default BookshelfLayout;