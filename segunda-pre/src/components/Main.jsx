/**
 * @param {Object} props 
 * @param {string} props.pageTitle 
 * @param {React.ReactNode} props.children 
 */
export function Main({ pageTitle, children }) {
  return (
    <main className="h-full flex flex-col">
      <div className='flex-none px-2 md:px-6 bg-violet-400'>
        <h1 className='pl-2 pt-[0.5em] pb-[0.25em] text-3xl font-semibold'>{pageTitle}</h1>
      </div>
      <div className='flex-1 px-2 md:px-6 bg-indigo-50 py-4'>
        {children}
      </div>
    </main>
  )
}
