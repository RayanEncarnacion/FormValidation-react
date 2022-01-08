import useCustomHook from "./useCustomHook.js";

function App() {
  const {
    dataSent,
    formRef,
    onSubmit,
    register,
    handleSubmit,
    errors,
    capitalize,
  } = useCustomHook();

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign Up</h2>
      <label htmlFor="name">Name</label>
      <input
        required
        {...register("name", { required: true })}
        type="text"
        name="name"
      />
      <p>{errors.name?.message}</p>
      <label htmlFor="email">Email</label>
      <input
        required
        {...register("email", { required: true })}
        type="text"
        name="email"
      />
      <p>{errors.email && "Email must be valid."}</p>
      <label htmlFor="password">Password</label>
      <input
        required
        {...register("password", { required: true })}
        type="password"
        name="password"
      />
      <p>{errors.password && capitalize(errors.password.message)}</p>
      <label htmlFor="repeatPassword">Repeat Password</label>
      <input
        required
        {...register("repeatPassword", { required: true })}
        type="password"
        name="repeatPassword"
      />

      <p>{errors.repeatPassword && "Passwords must be the same."}</p>

      {dataSent && <p className="success">Data sent successfully!</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
