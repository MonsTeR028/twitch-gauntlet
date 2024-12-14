<?php

namespace App\Controller;

use App\Repository\GamesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class GauntletPanelController extends AbstractController
{
    #[Route('/gauntlet/panel', name: 'app_gauntlet_panel')]
    public function index(Request $request, GamesRepository $gamesRepository): Response
    {
        $gauntlet = $request->request->all();
        $selectedOrder = json_decode($gauntlet['selected_order'], true);
        $gamesPost = $gauntlet['game'];
        $gamesIndexes = array_intersect($selectedOrder, $gamesPost);

        $games = [];
        foreach ($gamesIndexes as $gameIndex) {
            $games[] = $gamesRepository->findBy(['id' => (int) $gameIndex])[0];
        }
        dump($games);

        return $this->render('app_gauntlet_panel/index.html.twig', [
            'gauntlet' => $gamesIndexes, 'games' => $games,
        ]);
    }
}
