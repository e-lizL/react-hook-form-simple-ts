import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function ReactHookFormSimpleTS() {
  const [thanksMessage, setThanksMessage] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();

  const mySubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setThanksMessage(true);
  };
  return (
    <>
      <h1>Simple React Hook Form Using TS</h1>

      <form onSubmit={handleSubmit(mySubmit)}>
        <div>
          <label>name</label>
          <input {...register("name")}></input>
        </div>

        <div>
          <label>email</label>
          <input {...register("email")}></input>
        </div>

        <div>
          <label>message</label>
          <input {...register("message")}></input>
        </div>

        <input type="submit" />
      </form>

      {thanksMessage && (
        <h2>Thanks for contacting us, we'll get back to you shortly.</h2>
      )}
    </>
  );
}
