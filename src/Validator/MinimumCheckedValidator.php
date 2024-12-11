<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class MinimumCheckedValidator extends ConstraintValidator
{
    public function validate(mixed $value, Constraint $constraint): void
    {
        /* @var MinimumChecked $constraint */

        if (!is_array($value)) {
            return; // Si ce n'est pas un tableau, on ne valide pas.
        }

        $checkedCount = count(array_filter($value));
        if ($checkedCount < $constraint->limit) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ limit }}', $constraint->limit)
                ->addViolation();
        }
    }
}
