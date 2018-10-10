<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * @return Response
     */

    /**
     * @Route("/{vueRouting}", requirements={"vueRouting"="^(?!api|_(profiler|wdt)).+"}, name="index")
     * @param Request $request
     * @param null|string $vueRouting
     * @return Response
     * @throws JsonException
     */
    public function index(Request $request, ?string $vueRouting = null): Response
    {
        return $this->render('base.html.twig', [
            'vueRouting' => \is_null($vueRouting) ? '/' : '/' . $vueRouting,
            'queryParameters' => json_encode($request->query->all()),
        ]);
    }
}
