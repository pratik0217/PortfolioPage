export default function skillLogo(props) {
  return (
    <div id='skill-logo' className='hidden sm:container md:hidden lg:flex justify-center hover:scale-z-200 hover:-translate-y-2 transition-all duration-300 ease-in-out group'>
        <img src={props.logo} height={150} width={150} alt="" />
    </div>
  )
}
