<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\Serializer\SerializerInterface;
use App\Service\TaskService;

class TaskController extends AbstractController
{
    /**
     * @var SerializerInterface
     */
    private $serializer;

    /**
     * @var TaskService
     */
    private $taskService;

    /**
     * @param SerializerInterface $serializer
     * @param TaskService $taskService
     */
    public function __construct(SerializerInterface $serializer, TaskService $taskService)
    {
        $this->serializer = $serializer;
        $this->taskService = $taskService;
    }

    /**
     * @Rest\Post("/api/task/create", name="createTask")
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $title = $request->request->get('title');
        $description = $request->request->get('description');
        $taskEntity = $this->taskService->createTask($title, $description);
        $data = $this->serializer->serialize($taskEntity, 'json');

        sleep(1);

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/api/task/edit", name="editTask")
     * @param Request $request
     * @return JsonResponse
     */
    public function edit(Request $request): JsonResponse
    {
        $id = $request->request->get('id');
        $title = $request->request->get('title');
        $description = $request->request->get('description');
        $taskEntity = $this->taskService->editTask($id, $title, $description);
        $data = $this->serializer->serialize($taskEntity, 'json');

        sleep(1);

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/api/task/remove", name="removeTask")
     * @param Request $request
     * @return JsonResponse
     */
    public function remove(Request $request): JsonResponse
    {
        $id = $request->request->get('id');
        $this->taskService->removeTask($id);
        
        sleep(1);

        return new JsonResponse($id, 200, [], true);
    }

    /**
     * @Rest\Get("/api/tasks", name="getAllTasks")
     * @return JsonResponse
     */
    public function getAll(): JsonResponse
    {
        $taskEntities = $this->taskService->getAll();

        $data = $this->serializer->serialize($taskEntities, 'json');

        sleep(1);

        return new JsonResponse($data, 200, [], true);
    }
}
