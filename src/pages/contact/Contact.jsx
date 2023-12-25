import {useForm} from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import "./Contact.scss";

const notify = () => toast.success('Your message has been sent successfully!');

export const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  

  const onSubmit = (data)=>{
    console.log(data);
    
    notify();
  }


  return (
    <section className="contact-section pt-8">
      <div className="distorted-background d-flex justify-content-center align-items-center">
        <h2 className="text-white fw-bold">CONTACT</h2>
      </div>
        <div className="d-flex justify-content-center py-5 px-1 px-lg-0">
          <div className="container d-flex flex-column flex-lg-row justify-content-lg-center gap-lg-3">
            <iframe className="map w-100 mb-2 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15152864.798740195!2d-117.87673060811983!3d21.994833674820292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba260e8fffc505%3A0x72919a332d1489d3!2sFashe!5e0!3m2!1sfr!2sma!4v1690540472578!5m2!1sfr!2sma" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="form">
              <h2 className="mb-1">Send us your message</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-100 py-13 px-1 border border-secondary-subtle" name="name" {...register("name")} type="text" placeholder="Full Name" required/>
                <input className="w-100 mt-2 py-13 px-1 border border-secondary-subtle" name="phone" {...register("phone",{valueAsNumber: true})} type="text" placeholder="Phone Number" required/>
                <input  className="w-100 mt-2 py-13 px-1 border border-secondary-subtle" name="email" {...register("email")} type="email" placeholder="Email Address" required/>
                <textarea className="w-100 mt-2 py-13 px-1 border border-secondary-subtle" name="message" {...register("message")}  cols="30" rows="5" placeholder="Message" required></textarea>
                <button type="submit" className="btn bg-black text-white rounded-pill px-4 py-13 mt-2">SEND</button>
              </form>
            </div>
          </div>
        </div>
        <Toaster/>
    </section>
  );
};
