<?php

namespace App\Controller;

use App\Repository\GamesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapQueryParameter;
use Symfony\Component\Routing\Attribute\Route;

class GauntletCreatorController extends AbstractController
{
    #[Route('/gauntlet', name: 'app_gauntlet_creator')]
    public function index(
        GamesRepository $gamesRepository,
        #[MapQueryParameter] int $nbGames = 10,
        #[MapQueryParameter] string $disposition = 'top',
    ): Response {
        $games = $gamesRepository->findAll();

        // Convertion de l'image et ajout d'une propriété pour la lire dans la vue
        foreach ($games as $game) {
            if ($game->getImage()) {
                $game->base64Image = base64_encode(stream_get_contents($game->getImage()));
            }
        }

        return $this->render('gauntlet_creator/index.html.twig', [
            'games' => $games, 'nbGames' => $nbGames, 'disposition' => $disposition,
        ]);
    }
}
