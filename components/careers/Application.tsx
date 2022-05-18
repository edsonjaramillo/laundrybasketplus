import { CustomInput, FormGroupLabel } from '@/components/index';
import { formatPhoneNumber, validationDate, validationPhone, validationStandard } from '@/lib/form';
import { toastNotification, ToastType } from '@/lib/toastNotification';
import { useForm } from 'react-hook-form';
import { TextFieldInput } from '../contact/FormInputs';

interface ApplicationProps {
  title: string;
}

const Application = ({ title }: ApplicationProps) => {
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

    console.table(templateParameters);
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
    <form id='application' className='form' onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className='apply__h2'>{`Application for ${title}`}</h2>
      <div className='form__grid'>
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
        <FormGroupLabel name='date' label='Date You Can Start' errors={errors['date']}>
          <CustomInput
            id='date'
            name='date'
            type='date'
            placeholder='0123456789'
            register={register}
            validation={validationDate}
          />
        </FormGroupLabel>
        <FormGroupLabel
          name='extrainformation'
          label='Extra Information'
          errors={errors['extrainformation']}>
          <TextFieldInput
            id='extrainformation'
            name='extrainformation'
            placeholder='Enter extra information if needed'
            rows={8}
            register={register}
          />
        </FormGroupLabel>
        <button type='submit' className='form__button'>
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default Application;
