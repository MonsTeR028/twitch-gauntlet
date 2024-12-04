<?php

namespace App\Controller;

use App\Repository\GamesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GauntletCreatorController extends AbstractController
{
    #[Route('/gauntlet', name: 'app_gauntlet_creator')]
    public function index(GamesRepository $gamesRepository, Request $request): Response
    {
        $games = $gamesRepository->findAll();

        foreach ($games as $game) {
            if ($game->getImage()) {
                $game->base64Image = base64_encode(stream_get_contents($game->getImage()));
            }
        }

        $reponsePost = $request->request->all();
        $formulaire = $reponsePost['gauntlet_parameter'];
        $nbGames = $formulaire['nbGames'];
        $disposition = $formulaire['disposition'];

        return $this->render('gauntlet_creator/index.html.twig', [
            'games' => $games, 'nbGames' => $nbGames, 'disposition' => $disposition,
        ]);
    }
}
