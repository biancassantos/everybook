function SectionHeader({ children }: {children: string}) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-lg text-primary font-semibold xs:text-xl">
        {children}
      </h2>
      <hr className="border border-secondary w-full" />
    </div>
  )
}

export default SectionHeader;