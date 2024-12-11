<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GauntletPanelController extends AbstractController
{
    #[Route('/gauntlet/panel', name: 'app_gauntlet_panel')]
    public function index(Request $request): Response
    {
        $gauntlet = $request->request->all();
        // Faire en sorte que la requete Post ne soit pas envoyé dans l'ordre --> avec script placeholder gauntlet
        return $this->render('app_gauntlet_panel/index.html.twig', ['gaunlet' => $gauntlet]);
    }
}
