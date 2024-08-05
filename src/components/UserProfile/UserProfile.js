import { useNavigate } from 'react-router-dom';
import MobileBackground from '../../globalComponent/ui/MobileBackground';
import { GoChevronRight } from "react-icons/go";

const  PinkButton = ({ text, onClickHandler }) => {
  return (
    <button
      // disabled={onClickHandler? true : false}
      onClick={onClickHandler && onClickHandler}
      className='h-16 w-full bg-[#FFEFEA] flex items-center justify-between ga-2 px-8'
    >
      <p className='capitalize font-medium text-lg'>
        {text}
      </p>
      <p className='text-2xl'>
        <GoChevronRight />
      </p>
    </button>
  )
}

const UserProfile = () => {
    const navigate = useNavigate()
    // const { isMobile } = useMobile()\

    const handleLogOut = () => {
      navigate("/login")
    }

    function handleTandC() {
      const pdfUrl = "https://res.cloudinary.com/dkrinlbmx/image/upload/v1722246207/Terms_of_condition._rwd7dj.pdf"
      window.open(pdfUrl, "_blank");
    }

    function handlePrivacyPolicy() {
      const pdfUrl = "https://res.cloudinary.com/dkrinlbmx/image/upload/v1722246679/TOOKI_PRIVACY_POLICY_hf6zef.pdf"
      window.open(pdfUrl, "_blank");
    }

    const goToOrderHistory = () => {
      navigate("/order-history")
    }

    const goToBookAgain = () => {
      navigate("/book")
    }

  return (
    <MobileBackground title={"My Profile"}>
      <div className='w-full h-full pt-8'>
        <div 
          style={{ background: "linear-gradient(89.79deg, #FFFFFF -2.03%, rgba(230, 255, 232, 0.75) 50.93%, #FFFFFF 99.82%)"}}
          className='w-full p-8 text-left'
        >
          <p className='text-2xl font-medium'>
            Ashutosh Kumar
          </p>
          <button
            disabled
            className='w-full mt-20 bg-[#00C50A] rounded-lg p-3 text-white text-xl font-medium'
          >
            Add GST Details
          </button>
        </div>

        <div className='w-full text-left pt-10'>
            <PinkButton 
              text={"saved addresses"} 
            />
            <PinkButton 
              text={"Previous Orders"} 
              onClickHandler={goToOrderHistory}
            />
            <PinkButton 
              text={"Book With Number"} 
              onClickHandler={goToBookAgain}
            />

            <p className='px-4 py-2 text-sm'>
              Platform Policies
            </p>
            <PinkButton 
              text={"Privacy Policy"} 
              onClickHandler={handlePrivacyPolicy}
            />
            <PinkButton 
              text={"terms & conditions"} 
              onClickHandler={handleTandC}
            />

            <p className='px-4 py-2 text-sm'>
              Settings
            </p>
            <PinkButton 
              text={"account settings"} 
            />
            <PinkButton 
              text={"log out"} 
              onClickHandler={handleLogOut}
            />
        </div>
      </div>
    </MobileBackground>
  )
}

export default UserProfile