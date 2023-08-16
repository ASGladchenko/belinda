import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isThreeLetterMonth', async: false })
export class IsArrayConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    if (typeof value === 'string') {
      try {
        const array = JSON.parse(value);
        if (!Array.isArray(array)) return false;
      } catch (e) {
        return false;
      }
    }

    if (typeof value !== 'string') {
      return false;
    }

    return true;
  }

  defaultMessage() {
    return 'months - months must be an array';
  }
}

export function IsCustomArray(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsArrayConstraint,
    });
  };
}
