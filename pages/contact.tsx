import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { HeadOpenGraph, CustomInput, RadioInput } from '@/components/index';
import { TextFieldInput, FormGroupLabel } from '@/components/index';
import { validationStandard, validationPhone, validationEmail } from '@/lib/form';
import { formatPhoneNumber } from '@/lib/form';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name } = data;

    const templateParameters = {
      name: data.name,
      organization: data.organization,
      destination: data.destination,
      email: data.email,
      phone: formatPhoneNumber(data.phone),
      choice: data.choice,
      message: data.message,
    };
    // const { status } = await emailjs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    //   templateParameters,
    //   process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    // );

    // if (status == 200) {
    //   toastNotification(
    //     ToastType.SUCCESS,
    //     `Thank you ${name} for your message. We will get back to you as soon as possible.`,
    //     5000
    //   );
    //   reset();
    // } else {
    //   toastNotification(ToastType.ERROR, 'Error occured. Try again.');
    // }
  };

  const onError = () => toastNotification(ToastType.ERROR, 'Check input requirements.');

  return (
    <>
      <HeadOpenGraph
        title='Contact Us'
        description='Contact us for more information about our services or any general inquiries.'
        image='https://media.graphassets.com/rGIffdyDQHSL0ePjy3ti'
        alt='Laundry Basket Plus logo'
      />

      <div className='contact responsive-width-contact'>
        <div className='contact__grid'>
          <h1 className='contact__header'>Have a question?</h1>
          <span className='contact__subheader'>
            Please fill out the form below and our team will be in contact soon.
          </span>
        </div>
      </div>

      <form className='form' onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='form__grid responsive-width-contact'>
          <FormGroupLabel name='name' label='Name' errors={errors['name']}>
            <CustomInput
              id='name'
              name='name'
              type='text'
              placeholder='Jane Doe'
              register={register}
              validation={validationStandard}
            />
          </FormGroupLabel>
          <FormGroupLabel name='email' label='Email' errors={errors['email']}>
            <CustomInput
              id='email'
              name='email'
              type='text'
              placeholder='janedoe@me.com'
              register={register}
              validation={validationEmail}
            />
          </FormGroupLabel>
          <FormGroupLabel name='phone' label='Phone Number' errors={errors['phone']}>
            <CustomInput
              id='phone'
              name='phone'
              type='text'
              placeholder='0123456789'
              register={register}
              validation={validationPhone}
            />
          </FormGroupLabel>
          <FormGroupLabel name='message' label='Message' errors={errors['message']}>
            <TextFieldInput
              id='message'
              name='message'
              placeholder='Enter Message'
              rows={10}
              register={register}
              validation={validationStandard}
            />
          </FormGroupLabel>
          <FormGroupLabel name='choice' label='Response Choice' errors={errors['choice']}>
            <div className='form__radiogroup'>
              <label className='form__radiolabel' htmlFor='choice-Either'>
                <RadioInput
                  id='choice'
                  name='choice-Either'
                  value='Either'
                  register={register}
                  validation={validationStandard}
                />
                Either
              </label>
              <label className='form__radiolabel' htmlFor='choice-Email'>
                <RadioInput
                  id='choice'
                  name='choice-Email'
                  value='Email'
                  register={register}
                  validation={validationStandard}
                />
                Email
              </label>
              <label className='form__radiolabel' htmlFor='choice-Phone'>
                <RadioInput
                  id='choice'
                  name='choice=Phone'
                  value='Phone'
                  register={register}
                  validation={validationStandard}
                />
                Phone
              </label>
            </div>
          </FormGroupLabel>
          <button type='submit' className='form__button'>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactPage;
