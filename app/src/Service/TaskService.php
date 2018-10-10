<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Task;

final class TaskService
{
    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @param string $title
     * @param string $description
     * @return Task
     */
    public function createTask(string $title, string $description): Task
    {
        $taskEntity = new Task();
        $taskEntity->setTitle($title);
        $taskEntity->setDescription($description);
        $this->em->persist($taskEntity);
        $this->em->flush();

        return $taskEntity;
    }

    public function getAll(): array
    {
        return $this->em->getRepository(Task::class)->findBy([], ['id' => 'DESC']);
    }
}