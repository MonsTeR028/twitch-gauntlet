<?php

namespace App\Controller;

use App\Form\GauntletParameterType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GauntletParameterController extends AbstractController
{
    #[Route('/settings', name: 'app_gauntlet_parameter')]
    public function index(Request $request): Response
    {
        $form = $this->createForm(GauntletParameterType::class);

        return $this->render('gauntlet_parameter/index.html.twig', ['formulaire' => $form->createView()]);
    }
}
