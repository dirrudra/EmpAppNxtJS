import Image from "next/image";
import AuthForm from "./components/AuthForm";
AuthForm
export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h1>
            Welcome to EMS
          </h1>
        </div>
        <div>
          <p>
            This is an employee management System that includes features like: Online DBMS, User Authentication
          </p>
        </div>
        <div>
          <AuthForm />
          
        </div>
      </div>
    </main>
  );
}
