function EmptyMessage({ msg }: {msg: string}) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <p className="text-primarydark">
        {msg}
      </p>
    </div>
  )
}

export default EmptyMessage;