type BookshelfLayoutProps = {
  children: React.ReactNode
}

function BookshelfLayout({ children }: BookshelfLayoutProps) {
  return (
    <section className="grid grid-cols-5 gap-y-20">
      {children}
    </section>
  )
}

export default BookshelfLayout;