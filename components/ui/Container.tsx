import { cn } from '@/lib/cn';
import type { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Contenedor centrado con ancho máximo y padding responsive. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn('container-base', className)}>{children}</Tag>;
}
