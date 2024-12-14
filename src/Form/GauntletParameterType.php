<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\SubmitButton;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GauntletParameterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')
            ->setAction('/gauntlet')
            ->add('nbGames', IntegerType::class,
                ['label' => 'Selectionnez le nombre de jeux (max 10)', 'attr' => ['min' => 1, 'max' => 10]])
            ->add('disposition', ChoiceType::class,
                ['label' => 'Selectionnez le disposition', 'choices' => [
                    'Haut' => 'top',
                    'Bas' => 'bottom',
                    'Gauche' => 'left',
                    'Droite' => 'right']])
            ->add('typeEcran', ChoiceType::class,
                ['label' => 'Type de Gauntlet', 'choices' => [
                    'Gauntlet sur une fenêtre' => 'oui',
                    'Paramétres séparés du Gauntlet' => 'non',
                ]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
