import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isThreeLetterMonth', async: false })
export class IsThreeLetterMonthConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, args: ValidationArguments) {
    let transformedValue = [];

    if (!Array.isArray(value) && typeof value === 'string') {
      try {
        const array = JSON.parse(value);
        transformedValue = [...transformedValue, ...array];
      } catch (e) {
        return false;
      }
    }

    const validMonths = [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ];

    for (const month of transformedValue) {
      if (
        typeof month !== 'string' ||
        month.length !== 3 ||
        !validMonths.includes(month.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Each value in ${args.property} must be a valid three-letter month abbreviation (e.g. 'jan', 'feb', etc.)`;
  }
}

export function IsThreeLetterMonth(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsThreeLetterMonthConstraint,
    });
  };
}
