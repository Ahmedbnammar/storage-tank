<?php

namespace App\EventSubscriber;

use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use Doctrine\ORM\Event\LifecycleEventArgs;

class UserChangedEventSubscriber implements EventSubscriber
{
    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function getSubscribedEvents()
    {
        return [
            "preUpdate",
            "prePersist"
        ];
    }

    public function prePersist(LifecycleEventArgs $event)
    {
        $entity = $event->getEntity();

        if (!($entity instanceof User)) {
            return;
        }

        $entity->setPassword($this->userPasswordHasher->hashPassword($entity, $entity->getPassword()));
    }

    public function preUpdate(LifecycleEventArgs $eventArgs){
        $this->prePersist($eventArgs);
    }

}