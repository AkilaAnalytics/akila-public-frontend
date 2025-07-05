import { quote } from '~/view/assets'

export default function TestimonialCard({
  bgImg,
  name,
  avatar,
  designation,
  review
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        width: '100%',
        height: '100%'
      }}
      className={` relative flex min-h-[400px] w-full min-w-[300px] justify-center bg-contain bg-center bg-no-repeat`}>
      <div className=" relative ">
        <div className="avatar mb-[90px] flex justify-center bg-green-500">
          <img
            src={avatar}
            alt="avatar"
            className=" absolute top-[5px] sm:top-[-10px] "
          />
        </div>
        <h4 className="text-[18px] text-[700]">{name}</h4>
        <h4 className="mb-[2px] text-[18px] font-[400] ">{designation}</h4>
        <div className="mb-[8px] flex justify-center">
          <img src={quote} alt="" />
        </div>
        <p className="line-clamp-4 max-w-[200px] text-[12px] font-[400]">
          {review}
        </p>
      </div>
    </div>
  )
}
