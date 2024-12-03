<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GauntletParameterController extends AbstractController
{
    #[Route('/settings', name: 'app_gauntlet_parameter')]
    public function index(): Response
    {
        return $this->render('gauntlet_parameter/index.html.twig', []);
    }
}
