import CustomerCreate from "../components/CustomerCreate";
import CustomerList from "../components/CustomerList";

function CustomersPage() {
  return (
    <>
      <main className="m-4 w-full">
        <h1 className="text-2xl font-bold">Customers</h1>

        <section>
          <h2 className="text-xl font-semibold">Create a new customer</h2>

          <CustomerCreate />
        </section>

        <section>
          <h2 className="text-xl font-semibold">Customers</h2>

          <CustomerList />
        </section>
      </main>
    </>
  );
}
export default CustomersPage;
