import { Text as RNText, TextProps } from 'react-native';
import { cn } from '../utils/cn';
export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn('font-regular', className)} {...props} />;
}
