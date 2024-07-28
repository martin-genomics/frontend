// components/Breadcrumbs.tsx

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the hook
// import styles from './Breadcrumbs.module.css'; // Import your CSS module

interface Breadcrumb {
  href: string;
  label: string;
}

const Breadcrumbs: FC = () => {
  const pathname = usePathname(); // Get the current pathname

  // Split path into segments
  const segments = pathname.split('/').filter(segment => segment);

  // Build breadcrumb items
  const breadcrumbs: Breadcrumb[] = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    return {
      href,
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize first letter
    };
  });

  return (
    <nav aria-label="Breadcrumb" className=''>
      <ol className='flex font-semibold my-5'>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href}>
            {index < breadcrumbs.length - 1 ? (
              <Link href={breadcrumb.href} passHref>
                    {breadcrumb.label}
                    <span className='mx-[1px]'>/</span>
              </Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
