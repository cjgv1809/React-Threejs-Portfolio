import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
    </Html>
  );
}

export default Loader;
