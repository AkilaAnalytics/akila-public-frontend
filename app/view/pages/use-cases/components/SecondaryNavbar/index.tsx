const navigation = [
  { name: 'Challenges', href: '#', current: false },
  { name: 'Opportunities', href: '#', current: true },
  { name: 'Akila Advantage', href: '#', current: false },
  { name: 'Getting Started', href: '#', current: false }
]

export default function SecondaryNavbar({ handleTabChange, activeTab }) {
  return (
    <nav className="sticky top-[60px] z-10  mt-8 hidden w-full  bg-black py-8 shadow-md sm:mt-0 md:block">
      <div className="container_class mx-auto block ">
        <div className="flex items-center justify-start space-x-12 border-b-4 border-b-greyText tracking-wide">
          {navigation.map((item) => (
            <div
              onClick={(e) => handleTabChange(e.target.textContent)}
              key={item.name}
              className={`${
                activeTab === item.name
                  ? 'border-b-4 border-turqoise text-linkText'
                  : ''
              } text-md relative z-10 -mb-[5px] cursor-pointer px-2 py-4 font-medium leading-tight tracking-wide lg:-mb-1 lg:text-lg`}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
