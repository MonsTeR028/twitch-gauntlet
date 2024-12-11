<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * @Target({"PROPERTY", "METHOD", "ANNOTATION"})
 */
#[\Attribute(\Attribute::TARGET_PROPERTY | \Attribute::TARGET_METHOD | \Attribute::IS_REPEATABLE)]
class MinimumChecked extends Constraint
{
    public string $message = 'Vous devez cocher au moins {{ limit }} cases.';
    public int $limit = 1; // Par défaut, une seule case doit être cochée.

    public function getRequiredOptions(): array
    {
        return ['limit'];
    }
}
