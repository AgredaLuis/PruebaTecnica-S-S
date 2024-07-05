"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./ContactForm.module.css";
import toast from "react-hot-toast";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    toast.success("Su mensaje ha sido enviado");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Nombre <span className={styles.error}>*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className={styles.input}
          {...register("name", {
            required: "El nombre es requerido",
            minLength: {
              value: 4,
              message: "El nombre debe tener al menos 4 caracteres",
            },
          })}
        />
        {errors.name ? (
          <p className={styles.error}>{errors.name.message}</p>
        ) : null}
      </div>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.error}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="TuCorreo@example.com"
          className={styles.input}
          {...register("email", {
            required: "El correo es requerido",
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Mensaje <span className={styles.error}>*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Quiero comunicarme porque vi valor en..."
          className={styles.textarea}
          {...register("message", {
            required: "El mensaje es requerido",
            minLength: {
              value: 20,
              message: "El mensaje debe tener al menos 20 caracteres",
            },
          })}
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>
      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
