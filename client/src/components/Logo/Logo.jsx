import logo from '../../assets/logo.png'
export default function Logo() {
  return (
    <div className="flex items-end ">
      <img src={logo} alt="Logo" />
      <h3 className="text-2xl font-bold -ms-2">ParcelPro</h3>
    </div>
  )
}
