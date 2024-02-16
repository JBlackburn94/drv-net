export default function Navbar() {
  const links = [
    {
      id: 1,
      name: "Tasks",
      url: "/tasks",
    },
    {
      id: 2,
      name: "Orders",
      url: "/orders",
    },
    {
      id: 3,
      name: "Customers",
      url: "/customers",
    },
    {
      id: 5,
      name: "Commission",
      url: "/commission",
    },
  ];
  return (
    <nav className="h-16 bg-black w-full text-white p-4 flex items-center justify-between fixed">
      <div>
        <h1 className="text-xl font-bold">DRVnet</h1>
      </div>
      <div>
        <ul className="flex">
          {links.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url} className="mx-4">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
